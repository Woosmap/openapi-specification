<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_addressautocompletecollectionresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_AddressAutocompleteCollectionResponse">AddressAutocompleteCollectionResponse</h3>

Address Collection Response containing Localities

| Field                                                                                                                                | Required | Type                                                                                                                                    | Description                                                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AddressAutocompleteCollectionResponse-predictions" class="add-link schema-object-property-key"><code>predictions</code></h4> | optional | Array&lt;[AddressAutocompleteResponse](<#Woosmap Platform API Reference_AddressAutocompleteResponse> "AddressAutocompleteResponse")&gt; | See [AddressAutocompleteResponse](<#Woosmap Platform API Reference_AddressAutocompleteResponse> "AddressAutocompleteResponse") for more information. |
| <h4 id="AddressAutocompleteCollectionResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>           | optional | [AddressStatus](<#Woosmap Platform API Reference_AddressStatus> "AddressStatus")                                                        | See [AddressStatus](<#Woosmap Platform API Reference_AddressStatus> "AddressStatus") for more information.                                           |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_AddressAutocompleteCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "predictions": [
    {
      "public_id": "aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0",
      "description": "London, England, United Kingdom",
      "matched_substring": {
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      },
      "type": "locality"
    },
    {
      "public_id": "aGVyZTpjbTpuYW1lZHBsYWNlOjIwNDE5Nzgz",
      "description": "Londonderry, Northern Ireland, United Kingdom",
      "matched_substring": {
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      },
      "type": "locality"
    },
    {
      "public_id": "aGVyZTpjbTpuYW1lZHBsYWNlOjIwNDExMTIz",
      "description": "County Londonderry, Northern Ireland, United Kingdom",
      "matched_substring": {
        "description": [
          {
            "offset": 7,
            "length": 4
          }
        ]
      },
      "type": "admin_level"
    }
  ],
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-addressautocompletecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_AddressAutocompleteCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-addressautocompletecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_AddressAutocompleteCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_addressautocompletecollectionresponse] -->