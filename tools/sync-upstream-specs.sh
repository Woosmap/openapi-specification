#!/usr/bin/env bash
# Refreshes each upstream/<name>.json from https://api.woosmap.com/<name>/openapi.json.
set -euo pipefail

cd "$(dirname "$0")/../upstream"
for spec in *.json; do
  name="${spec%.json}"
  curl -sSf --retry 3 "https://api.woosmap.com/${name}/openapi.json" | jq . > "${spec}.tmp"
  mv "${spec}.tmp" "${spec}"
done
