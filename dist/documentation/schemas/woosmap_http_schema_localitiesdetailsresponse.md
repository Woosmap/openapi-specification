<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesdetailsresponse] -->
<h3 class="schema-object" id="LocalitiesDetailsResponse">LocalitiesDetailsResponse</h3>

Localities Details Root Node Response

| Field                                                                                                          | Required | Type   | Description                                                                                |
| :------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------------------------------------ |
| <h4 id="LocalitiesDetailsResponse-result" class="add-link schema-object-property-key"><code>result</code></h4> | optional | object | <div class="nonref-property-description"><p>The Root Node for Localities Details</p></div> |

<h4 class="schema-object-example" id="LocalitiesDetailsResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "result": {
    "formatted_address": "House Of Commons, Houses Of Parliament, London, SW1A 0AA",
    "types": [
      "address"
    ],
    "public_id": "TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ==",
    "geometry": {
      "location": {
        "lat": 51.4998415,
        "lng": -0.1246375
      },
      "accuracy": "ROOFTOP"
    },
    "address_components": [
      {
        "types": [
          "country",
          "administrative_area_level_0"
        ],
        "long_name": "United Kingdom",
        "short_name": "GB"
      },
      {
        "types": [
          "administrative_area_level_1"
        ],
        "long_name": "City of London",
        "short_name": "City of London"
      },
      {
        "types": [
          "locality"
        ],
        "long_name": "London",
        "short_name": "London"
      },
      {
        "types": [
          "postal_codes"
        ],
        "long_name": "SW1A 0AA",
        "short_name": "SW1A 0AA"
      },
      {
        "types": [
          "premise"
        ],
        "long_name": "Houses Of Parliament",
        "short_name": "Houses Of Parliament"
      },
      {
        "types": [
          "organisation"
        ],
        "long_name": "House Of Commons",
        "short_name": "House Of Commons"
      }
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesDetailsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesDetailsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesdetailsresponse] -->
