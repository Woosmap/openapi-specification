load("@npm//@redocly/cli:index.bzl", "redocly", "redocly_test")

def bundle(name, data, entry, visibility = ["//visibility:public"]):
    JSON_FILENAME = "{}.json".format(name)

    redocly(
        name = "raw",
        outs = ["raw.json"],
        args = ["bundle", entry, "--output", "$@"],
        data = data,
    )

    # example(s) fields cannot have $ref and must be dereferenced
    native.genrule(
        name = "{}-json".format(name),
        outs = [JSON_FILENAME],
        cmd = "$(location //rules:dereference) --spec $(location //:raw.json) --output $@",
        srcs = data + [":raw.json"],
        tools = ["//rules:dereference"],
        visibility = visibility,
    )

    redocly(
        name = "{}-yaml".format(name),
        outs = ["{}.yml".format(name)],
        args = ["bundle", "$(location {})".format(JSON_FILENAME), "--output", "$@"],
        data = [JSON_FILENAME],
    )

def validate(name, data):
    redocly_test(
        name = "{}-validation".format(name),
        args = ["lint", "$(location {})".format(data)],
        data = [data],
    )
