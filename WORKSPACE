workspace(
    name = "openapi-specification",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Needs a Node toolchain list that includes Node >= 22.12, see node_version below.
http_archive(
    name = "aspect_rules_js",
    sha256 = "1774702556e1d0b83b7f5eb58ec95676afe6481c62596b53f5b96575bacccf73",
    strip_prefix = "rules_js-2.9.2",
    url = "https://github.com/aspect-build/rules_js/releases/download/v2.9.2/rules_js-v2.9.2.tar.gz",
)

# Oldest release whose mirrored version list includes typescript 6.0.3.
http_archive(
    name = "aspect_rules_ts",
    sha256 = "06a432998e3f0b4c1057926b3946b51057413c6ffcb19bbc5e2674191a061063",
    strip_prefix = "rules_ts-3.8.10",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v3.8.10/rules_ts-v3.8.10.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    ts_version_from = "//:package.json",
)

load("@aspect_rules_js//js:toolchains.bzl", "rules_js_register_toolchains")

# The ESM-only remark/unified toolchain needs require(esm), so Node >= 22.12.
rules_js_register_toolchains(node_version = "22.14.0")

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
