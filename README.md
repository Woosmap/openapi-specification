# Woosmap OpenAPI3 Specification

View the documentation here:
<https://developers.woosmap.com/api-reference/>

## Description

An OpenAPI specification for Woosmap Platform.

| API                                                                              | Status   |
|----------------------------------------------------------------------------------|----------|
| [Geolocation](https://developers.woosmap.com/products/geolocation-api/location/) | Complete |
| [Stores](https://developers.woosmap.com/products/stores-api/overview/)           | Complete |
| [Localities](https://developers.woosmap.com/products/localities/get-started/)    | Complete |
| [Distance](https://developers.woosmap.com/products/distance-api/get-started/)    | Complete |
| [Transit](https://developers.woosmap.com/products/transit-api/route-endpoint/)   | Complete |
| [Indoor](https://developers.woosmap.com/products/indoor-api/get-started/)        | Complete |

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18437534-dad12f37-6d84-42d1-9889-2f529aee0ab9?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D18437534-dad12f37-6d84-42d1-9889-2f529aee0ab9%26entityType%3Dcollection%26workspaceId%3Dff0698d5-c4db-403e-b7c6-b622b68032d3)

## Development

The repository makes use of [Bazel](https://bazel.build/) to generate outputs from the specification and sample
requests.

### Upstream specs

The APIs that publish their own spec at `https://api.woosmap.com/<name>/openapi.json` are vendored in `upstream/` and
merged into `dist/merged-woosmap-openapi3.json`. A weekly workflow refreshes them and opens a PR when they change.
`npm run sync:upstream` does the same refresh locally.

### Build and test

To be able to generate responses, you'll need a woosmap public key and woosmap private key.
Once generated, it's convenient to add these environment variables in the file `.bazelrc.user` at the root of the
repository like this:

```bash
run --action_env WOOSMAP_PUBLIC_API_KEY=woos-xxxxxxxx
run --action_env WOOSMAP_PRIVATE_API_KEY=da4e8e73-xxxxx-xxxx
```

Then you'll be able to execute following command.

1. `npm i`
2. `npm run build`

   This generates the following outputs in the dist folder:

    - YAML file containing OpenAPI3 specification
    - JSON file containing OpenAPI3 specification
    - Structure Markdown documents for specification objects
    - Code snippets in multiple languages for sample requests

   > **Note**: The `dist/` folder is included in this repo and should be updated with all changes.

   > **Note**: If a documentation item is not generated, be sure it is included
   in the appropriate index.yml file.

3. `npm run responses` (optional)
   > **Note**: This is an optional step requiring an API key. Set the `WOOSMAP_PUBLIC_API_KEY`
   and `WOOSMAP_PRIVATE_API_KEY` environmental variable before running.

   > **Warning**: Data attached to the `WOOSMAP_PRIVATE_API_KEY` will be deleted. Use an empty test project for this.

   > **Note**: This step only needs to run when the generation code or sample requests have been updated.

   > **Note**: A single response can be updated similar to `npm run responses -- --only woosmap_http_address_details`.

4. `npm run samples` (optional)

   > **Note**: Generates snippets from requests to be integrated as xCodeSamples in path schemas.

5. `npm run test`

   Validate the OpenAPI Schema
