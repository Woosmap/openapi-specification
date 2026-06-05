<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_zonescollectionresponse] -->
<h3 class="schema-object" id="ZonesCollectionResponse">ZonesCollectionResponse</h3>

A Collection of Woosmap Zones retrieved in response to a get zones list.

| Field                                                                                                        | Required | Type                                | Description                                                                                                                  |
| :----------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="ZonesCollectionResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional | string                              | <div class="nonref-property-description"><p>the status as string</p></div>                                                   |
| <h4 id="ZonesCollectionResponse-zones" class="add-link schema-object-property-key"><code>zones</code></h4>   | optional | Array\&lt;[Zone](#Zone "Zone")\&gt; | <div class="ref-property-description"><p>The Zones collection</p><p>See <a href="#Zone">Zone</a> for more information.</div> |

<h4 class="schema-object-example" id="ZonesCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "zones": [
    {
      "store_id": "STORE_ID_123456",
      "zone_id": "ZoneB",
      "polygon": "POLYGON ((-122.4546384 37.774656, -122.4515485 37.7595934, -122.4354306 37.7602172, -122.4333707 37.7512596, -122.423071 37.7511239, -122.4242726 37.7687665, -122.4259893 37.7691736, -122.4289075 37.7732444, -122.4306241 37.7850483, -122.4472753 37.7830133, -122.445902 37.7759581, -122.4546384 37.774656))",
      "types": [
        "delivery"
      ],
      "description": "Delivery Zone for Store B"
    },
    {
      "store_id": "STORE_ID_45678",
      "zone_id": "ZoneC",
      "polygon": "POLYGON ((-122.4758889 37.7524995, -122.4751594 37.7321718, -122.4688079 37.7299995, -122.4648597 37.7261979, -122.4519851 37.7228035, -122.4483802 37.7215815, -122.4458053 37.726741, -122.4365356 37.7310857, -122.4315574 37.7324433, -122.4246909 37.7312214, -122.4219444 37.731493, -122.423071 37.7511239, -122.4333707 37.7512596, -122.4354306 37.7602172, -122.4515485 37.7595934, -122.4528628 37.7582744, -122.4540375 37.7566755, -122.4565266 37.7513144, -122.4601315 37.7521288, -122.4618481 37.7514501, -122.4635648 37.7530788, -122.4758889 37.7524995))",
      "types": [
        "delivery"
      ],
      "description": "Delivery Zone for Store C"
    }
  ],
  "status": "ok"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-zonescollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/ZonesCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-zonescollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - ZonesCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_zonescollectionresponse] -->
