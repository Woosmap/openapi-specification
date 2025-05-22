# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    name = "openapi-specification",
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")

# Fetch Aspect's rules_js so we can install our npm dependencies
http_archive(
    name = "aspect_rules_js",
    sha256 = "7ee67690ed4d6b5c8cbf6d47bb68b639192a29397a9fe3d513981fecc25a5653",
    strip_prefix = "rules_js-2.3.2",
    url = "https://github.com/aspect-build/rules_js/releases/download/v2.3.2/rules_js-v2.3.2.tar.gz",
)

# Fetch Aspect's rules_ts for TypeScript support
http_archive(
    name = "aspect_rules_ts",
    sha256 = "d584e4bc80674d046938563678117d17df962fe105395f6b1efe2e8a248b8100",
    strip_prefix = "rules_ts-3.5.1",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v3.5.1/rules_ts-v3.5.1.tar.gz",
)

# Register js dependencies
load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

# Register TypeScript dependencies
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor
    ts_version_from = "//:package.json",
)

# Set up toolchains
load("@aspect_rules_js//js:toolchains.bzl", "DEFAULT_NODE_VERSION", "rules_js_register_toolchains")

rules_js_register_toolchains(node_version = DEFAULT_NODE_VERSION)

# Set up npm
load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    generate_bzl_library_targets = True,
    npmrc = "//:.npmrc",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

http_archive(
    name = "rules_pkg",
    sha256 = "8f9ee2dc10c1ae514ee599a8b42ed99fa262b757058f65ad3c384289ff70c4b8",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.9.1/rules_pkg-0.9.1.tar.gz",
        "https://github.com/bazelbuild/rules_pkg/releases/download/0.9.1/rules_pkg-0.9.1.tar.gz",
    ],
)

load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

rules_pkg_dependencies()

[http_file(
    name = name + "_openapi",
    downloaded_file_path = name + ".json",
    urls = ["https://api.woosmap.com/{}/openapi.json".format(name)],
) for name in [
    "maps",
    "what3words",
    "indoor",
    "transit",
    "datasets",
]]
