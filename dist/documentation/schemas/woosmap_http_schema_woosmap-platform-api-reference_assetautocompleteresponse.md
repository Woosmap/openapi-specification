<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_assetautocompleteresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_AssetAutocompleteResponse">AssetAutocompleteResponse</h3>

Asset Autocomplete Response with highlighted results on asset name.

| Field                                                                                                                    | Required | Type | Description                                                                                                                                                                                                                               |
| :----------------------------------------------------------------------------------------------------------------------- | -------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetAutocompleteResponse-predictions" class="add-link schema-object-property-key"><code>predictions</code></h4> | optional |      | <div class="nonref-property-description"><p>A list of predictions based on similarity in all the <code>localizedNames</code> passed in query (or similarity to <code>store_name</code> if no <code>localizedNames</code> exist)</p></div> |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_AssetAutocompleteResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "predictions": [
    {
      "store_id": "2670",
      "name": "Sun Street",
      "types": [
        "Coffee shop"
      ],
      "matched_substrings": [
        {
          "offset": 4,
          "length": 6
        }
      ],
      "highlighted": "Sun <b>Street</b>"
    },
    {
      "store_id": "16069",
      "name": "7th Street",
      "types": [
        "Coffee shop"
      ],
      "matched_substrings": [
        {
          "offset": 4,
          "length": 6
        }
      ],
      "highlighted": "7th <b>Street</b>"
    },
    {
      "store_id": "1013873",
      "name": "The Street",
      "types": [
        "Coffee shop"
      ],
      "matched_substrings": [
        {
          "offset": 4,
          "length": 6
        }
      ],
      "highlighted": "The <b>Street</b>"
    },
    {
      "store_id": "1008896",
      "name": "12th Street",
      "types": [
        "Coffee shop"
      ],
      "matched_substrings": [
        {
          "offset": 5,
          "length": 6
        }
      ],
      "highlighted": "12th <b>Street</b>"
    },
    {
      "store_id": "1023565",
      "name": "Doha Street",
      "types": [
        "Coffee shop"
      ],
      "matched_substrings": [
        {
          "offset": 5,
          "length": 6
        }
      ],
      "highlighted": "Doha <b>Street</b>"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetautocompleteresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_AssetAutocompleteResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetautocompleteresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_AssetAutocompleteResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_assetautocompleteresponse] -->
