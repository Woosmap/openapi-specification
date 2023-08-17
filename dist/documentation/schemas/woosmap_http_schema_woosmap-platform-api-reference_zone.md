<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_zone] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_Zone">Zone</h3>

Attributes describing a Zone.

| Field                                                                                               | Required     | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                |
| :-------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <h4 id="Zone-polygon" class="add-link schema-object-property-key"><code>polygon</code></h4>         | **required** | string                                                         | <div class="nonref-property-description"><p>Zone geometry polygon as <strong>Well Known Text</strong>. WKT defines how to represent geometry of one object (cf. <a href="https://en.wikipedia.org/wiki/Well-known_text)">https://en.wikipedia.org/wiki/Well-known_text)</a>. Your zones could be complex and multipart polygons.</p></div> |
| <h4 id="Zone-store_id" class="add-link schema-object-property-key"><code>store_id</code></h4>       | **required** | [AssetId](<#Woosmap Platform API Reference_AssetId> "AssetId") | See [AssetId](<#Woosmap Platform API Reference_AssetId> "AssetId") for more information.                                                                                                                                                                                                                                                   |
| <h4 id="Zone-zone_id" class="add-link schema-object-property-key"><code>zone_id</code></h4>         | **required** | string                                                         | <div class="nonref-property-description"><p>A textual identifier that uniquely identifies a Zone.</p></div>                                                                                                                                                                                                                                |
| <h4 id="Zone-description" class="add-link schema-object-property-key"><code>description</code></h4> | optional     | string                                                         | <div class="nonref-property-description"><p>Textual description of your Zone</p></div>                                                                                                                                                                                                                                                     |
| <h4 id="Zone-status" class="add-link schema-object-property-key"><code>status</code></h4>           | optional     | string                                                         | <div class="nonref-property-description"><p>the status as string</p></div>                                                                                                                                                                                                                                                                 |
| <h4 id="Zone-types" class="add-link schema-object-property-key"><code>types</code></h4>             | optional     | Array&lt;string&gt;                                            | <div class="nonref-property-description"><p>Contains an array of types describing the Zone.</p></div>                                                                                                                                                                                                                                      |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_Zone-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "store_id": "STORE_ID_123456",
  "zone_id": "ZoneA",
  "polygon": "POLYGON ((-122.496116 37.7648181, -122.4954079 37.751518, -122.4635648 37.7530788, -122.4618481 37.7514501, -122.4601315 37.7521288, -122.4565266 37.7513144, -122.4540375 37.7566755, -122.4528359 37.7583041, -122.4515485 37.7595934, -122.4546384 37.774656, -122.4718903 37.7731635, -122.472577 37.772485, -122.4755811 37.7725529, -122.4791001 37.7723493, -122.4793576 37.7713995, -122.4784993 37.769839, -122.4783276 37.7680071, -122.4774693 37.766718, -122.4772118 37.7652931, -122.496116 37.7648181))",
  "types": [
    "delivery"
  ],
  "description": "Delivery Zone for Store A",
  "status": "ok"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-zone" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_Zone.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-zone" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_Zone" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_zone] -->
