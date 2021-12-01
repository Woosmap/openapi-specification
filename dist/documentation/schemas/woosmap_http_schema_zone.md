<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_zone] -->
<h3 class="schema-object" id="Zone">Zone</h3>

Attributes describing a Zone.

| Field                                                                                               | Required     | Type                          | Description                                                                                                                                                                                                                                                                                                                                |
| :-------------------------------------------------------------------------------------------------- | ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <h4 id="Zone-polygon" class="add-link schema-object-property-key"><code>polygon</code></h4>         | **required** | string                        | <div class="nonref-property-description"><p>Zone geometry polygon as <strong>Well Known Text</strong>. WKT defines how to represent geometry of one object (cf. <a href="https://en.wikipedia.org/wiki/Well-known_text)">https://en.wikipedia.org/wiki/Well-known_text)</a>. Your zones could be complex and multipart polygons.</p></div> |
| <h4 id="Zone-store_id" class="add-link schema-object-property-key"><code>store_id</code></h4>       | **required** | [AssetId](#AssetId "AssetId") | See [AssetId](#AssetId "AssetId") for more information.                                                                                                                                                                                                                                                                                    |
| <h4 id="Zone-zone_id" class="add-link schema-object-property-key"><code>zone_id</code></h4>         | **required** | string                        | <div class="nonref-property-description"><p>A textual identifier that uniquely identifies a Zone.</p></div>                                                                                                                                                                                                                                |
| <h4 id="Zone-description" class="add-link schema-object-property-key"><code>description</code></h4> | optional     | string                        | <div class="nonref-property-description"><p>Textual description of your Zone</p></div>                                                                                                                                                                                                                                                     |
| <h4 id="Zone-types" class="add-link schema-object-property-key"><code>types</code></h4>             | optional     | Array&lt;string&gt;           | <div class="nonref-property-description"><p>Contains an array of types describing the Asset.</p></div>                                                                                                                                                                                                                                     |

<h4 class="schema-object-example" id="Zone-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "zone_id": "ZoneA",
  "description": "Delivery Zone for Store A",
  "store_id": "store_a",
  "polygon": "POLYGON ((-122.4546384 37.774656,-122.4515485 37.7595934,-122.4354306 37.7602172,-122.4333707 37.7512596,-122.423071 37.7511239,-122.4242726 37.7687665,-122.4259893 37.7691736,-122.4289075 37.7732444,-122.4306241 37.7850483,-122.4472753 37.7830133,-122.445902 37.7759581,-122.4546384 37.774656))",
  "types": [
    "delivery"
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-zone" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Zone.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a data-label="openapi-github-woosmap-http-schema-zone" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Zone" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_zone] -->