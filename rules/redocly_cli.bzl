load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_run_binary", "js_test")

def bundle(name, entry, data = None, visibility = ["//visibility:public"], **kwargs):
    """Bundle OpenAPI files with redocly CLI."""
    JSON_FILENAME = "{}.json".format(name)
    YAML_FILENAME = "{}.yml".format(name)
    RAW_TARGET = "{}_raw".format(name)
    RAW_OUTPUT = "raw_{}.json".format(name)  # Give unique name to avoid conflicts

    # Use the entry directly without assuming it's a copy_to_bin target
    all_srcs = []
    if data:
        all_srcs.extend(data)

    all_srcs.append(entry)

    # Bundle raw output - use the redocly_cli binary from the root package
    js_run_binary(
        name = RAW_TARGET,
        outs = [RAW_OUTPUT],  # Use unique name
        tool = "//:redocly_cli",  # Use the binary from the npm package
        args = [
            "bundle",
            "$(rootpath {})".format(entry),
            "--output",
            "$(rootpath :{})".format(RAW_OUTPUT),
            "--ext",
            "json",
        ],
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
        args = ["lint", "$(location {})".format(data)],
    )
