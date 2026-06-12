# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    name = "openapi-specification",
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")

# Fetch Aspect's rules_js so we can install our npm dependencies
# v2.9.2 (still rules_js 2.x) ships a Node toolchain list that includes
# Node 22.x, required to register a Node >=22.12 toolchain below.
http_archive(
    name = "aspect_rules_js",
    sha256 = "1774702556e1d0b83b7f5eb58ec95676afe6481c62596b53f5b96575bacccf73",
    strip_prefix = "rules_js-2.9.2",
    url = "https://github.com/aspect-build/rules_js/releases/download/v2.9.2/rules_js-v2.9.2.tar.gz",
)

# Fetch Aspect's rules_ts for TypeScript support
# v3.8.10 is the first release whose mirrored version list includes
# typescript 6.0.3 (see ts/private/versions.bzl), keeping the hermetic fetch.
http_archive(
    name = "aspect_rules_ts",
    sha256 = "06a432998e3f0b4c1057926b3946b51057413c6ffcb19bbc5e2674191a061063",
    strip_prefix = "rules_ts-3.8.10",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v3.8.10/rules_ts-v3.8.10.tar.gz",
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
load("@aspect_rules_js//js:toolchains.bzl", "rules_js_register_toolchains")

# Node 22.x (>=22.12) supersedes the EOL Node 18 default and enables require()
# of the now ESM-only remark/unified toolchain used by the doc generator.
rules_js_register_toolchains(node_version = "22.14.0")

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
    "distance",
    "localities",
]]
