load("@aspect_bazel_lib//lib:copy_to_directory.bzl", "copy_to_directory")
load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_run_binary", "js_test")

def bundle(name, entry, data = None, config = None, decorators = None, visibility = ["//visibility:public"], **kwargs):
    """Bundle OpenAPI files with redocly CLI."""
    JSON_FILENAME = "{}.json".format(name)
    YAML_FILENAME = "{}.yml".format(name)
    RAW_TARGET = "{}_raw".format(name)
    RAW_OUTPUT = "raw_{}.json".format(name)  # Give unique name to avoid conflicts

    # Use the entry directly
    all_srcs = []
    if data:
        all_srcs.extend(data)
    if config:
        all_srcs.append(config)
    if decorators:
        all_srcs.extend(decorators)

    all_srcs.append(entry)

    # Bundle raw output - use the redocly_cli binary from the root package
    js_run_binary(
        name = RAW_TARGET,
        outs = [RAW_OUTPUT],  # Use unique name
        tool = "//:redocly_cli",  # Use the binary from the npm package
        args = [
            "bundle",
            "toBundle",
        ] + (["--config", "$(rootpath {})".format(config)] if config else []),
        srcs = all_srcs,
        env = {"DEBUG": "true"},
        # Add a progress message that will be displayed during build
        progress_message = "Bundling OpenAPI spec %{input} into %{output}",
    )

    # The JSON generation step needs to reference the output from RAW_TARGET properly
    js_run_binary(
        name = name + "_json",
        outs = [JSON_FILENAME],
        tool = "//rules:dereference",
        args = [
            "--spec",
            "$(rootpath :{})".format(RAW_TARGET),
            "--output",
            "$(rootpath {})".format(JSON_FILENAME),
        ],
        srcs = [":" + RAW_TARGET],
        visibility = visibility,
        env = {"BAZEL_BINDIR": "$(BINDIR)"},
    )

    # Generate YAML output from the JSON file
    js_run_binary(
        name = name + "_yaml",
        outs = [YAML_FILENAME],
        tool = "//:redocly_cli",
        args = [
            "bundle",
            "$(rootpath :{}_json)".format(name),
            "--output",
            "$(rootpath {})".format(YAML_FILENAME),
        ],
        srcs = [":{}_json".format(name)],
        visibility = visibility,
        progress_message = "Generating YAML from JSON for %{input}",
    )

def validate(name, data):
    native.sh_test(
        name = name,
        srcs = ["//:redocly_cli"],
        data = [data],
        args = ["lint", "--skip-rule=no-path-trailing-slash", "$(location {})".format(data)],
    )

def bundle_external_specs(name, specs, main_spec = "//:woosmap-openapi3.json", config = None, plugins = None):
    """Downloads, bundles and joins multiple OpenAPI specs.

    Args:
        name: Target name for the final joined spec
        specs: List of spec names to bundle
        main_spec: Path to the main OpenAPI spec
        config: Path to redocly config file
    """

    # Copy external specs to a directory
    copy_to_directory(
        name = "downloaded_openapi_specs",
        srcs = ["@{}_openapi//file".format(s) for s in specs],
        out = "external_specs",
        include_external_repositories = ["{}_openapi".format(s) for s in specs],
        visibility = ["//visibility:public"],
    )

    # Bundle each spec
    bundled_specs = []
    for spec in specs:
        bundle_name = "bundle_{}".format(spec)
        bundled_specs.append(bundle_name)

        js_run_binary(
            name = bundle_name,
            srcs = [":downloaded_openapi_specs"],
            outs = ["{}-bundled.json".format(spec)],
            args = [
                "bundle",
                "$(rootpath :downloaded_openapi_specs)/file/{}.json".format(spec),
                "--output",
                "{}-bundled.json".format(spec),
                "--remove-unused-components",
            ],
            tool = "//:redocly_cli",
        )

    # Join specs
    joined_target = name + "_joined"
    joined_output = "joined-woosmap-openapi3.json"

    js_run_binary(
        name = joined_target,
        srcs = [":{}".format(s) for s in bundled_specs] + [main_spec],
        outs = [joined_output],
        args = [
            "join",
            "$(rootpath {})".format(main_spec),
        ] + ["$(rootpath :{})".format(s) for s in bundled_specs] + [
            "--output",
            joined_output,
            "--prefix-tags-with-info-prop",
            "title",
            "--prefix-components-with-info-prop",
            "title",
        ],
        tool = "//:redocly_cli",
        visibility = ["//visibility:public"],
    )

    # Apply decorators to the joined spec
    final_srcs = [":" + joined_target]
    if config:
        final_srcs.append(config)
    if plugins:
        final_srcs.extend(plugins)

    js_run_binary(
        name = name,
        srcs = final_srcs,
        outs = ["merged-woosmap-openapi3.json"],
        args = [
            "bundle",
            "toBundle",
        ] + (["--config", "$(rootpath {})".format(config)] if config else []),
        tool = "//:redocly_cli",
        visibility = ["//visibility:public"],
    )
