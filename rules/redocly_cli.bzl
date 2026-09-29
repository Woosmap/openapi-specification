load("@aspect_rules_js//js:defs.bzl", "js_run_binary")

def bundle(name, entry, data = None, config = None, decorators = None, visibility = ["//visibility:public"], **kwargs):
    """Bundles entry with redocly, dereferences it to JSON and derives the YAML."""
    JSON_FILENAME = "{}.json".format(name)
    YAML_FILENAME = "{}.yml".format(name)
    RAW_TARGET = "{}_raw".format(name)
    RAW_OUTPUT = "raw_{}.json".format(name)

    all_srcs = []
    if data:
        all_srcs.extend(data)
    if config:
        all_srcs.append(config)
    if decorators:
        all_srcs.extend(decorators)

    all_srcs.append(entry)

    js_run_binary(
        name = RAW_TARGET,
        outs = [RAW_OUTPUT],
        tool = "//:redocly_cli",
        args = [
            "bundle",
            "toBundle",
        ] + (["--config", "$(rootpath {})".format(config)] if config else []),
        srcs = all_srcs,
        env = {"DEBUG": "true"},
        progress_message = "Bundling OpenAPI spec %{input} into %{output}",
    )

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
        # dereference resolves the example $refs that redocly v2 leaves external, so it needs the sources.
        srcs = [":" + RAW_TARGET] + all_srcs,
        visibility = visibility,
        env = {"BAZEL_BINDIR": "$(BINDIR)"},
    )

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

def validate(name, openapi_file = None, config = None, rules = None):
    validate_data = []
    if openapi_file:
        validate_data.append(openapi_file)
    if config:
        validate_data.append(config)
    if rules:
        validate_data.extend(rules)

    lint_args = []
    if openapi_file and not config:
        lint_args = ["lint", "$(location {})".format(openapi_file)]
    elif config:
        lint_args = ["lint", "toValidate", "--config", "$(rootpath {})".format(config)]

    native.sh_test(
        name = name,
        srcs = ["//:redocly_cli"],
        data = validate_data,
        args = lint_args,
    )

def bundle_external_specs(name, specs, main_spec = "//:woosmap-openapi3.json", config = None, plugins = None):
    """Joins main_spec with the specs vendored in //upstream, then applies the merge decorators."""
    bundled_specs = []
    for spec in specs:
        bundle_name = "bundle_{}".format(spec)
        spec_file = "//upstream:{}".format(spec)
        bundled_specs.append(bundle_name)

        js_run_binary(
            name = bundle_name,
            srcs = [spec_file],
            outs = ["{}-bundled.json".format(spec)],
            args = [
                "bundle",
                "$(rootpath {})".format(spec_file),
                "--output",
                "{}-bundled.json".format(spec),
                "--remove-unused-components",
            ],
            tool = "//:redocly_cli",
        )

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
            "--prefix-components-with-info-prop",
            "title",
        ],
        tool = "//:redocly_cli",
        visibility = ["//visibility:public"],
    )

    final_srcs = [":" + joined_target]
    if config:
        final_srcs.append(config)
    if plugins:
        final_srcs.extend(plugins)

    # The inject-code-samples decorator reads the snippets from the spec sources.
    final_srcs.append("//specification:openapi3")

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
