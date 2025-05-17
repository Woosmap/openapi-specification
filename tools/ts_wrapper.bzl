load("@aspect_rules_ts//ts:defs.bzl", _ts_project = "ts_project")

def ts_project(name, **kwargs):
    """Wrapper for ts_project with default tsconfig."""
    if "tsconfig" not in kwargs:
        kwargs["tsconfig"] = "//:tsconfig.json"
    if "transpiler" not in kwargs:
        kwargs["transpiler"] = "tsc"
    _ts_project(
        name = name,
        **kwargs
    )
