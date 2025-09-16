<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesautocompletecollectionresponse] -->
<h3 class="schema-object" id="LocalitiesAutocompleteCollectionResponse">LocalitiesAutocompleteCollectionResponse</h3>

Localities Collection Response containing Localities

| Field                                                                                                                                 | Required | Type                                                                                                            | Description                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesAutocompleteCollectionResponse-localities" class="add-link schema-object-property-key"><code>localities</code></h4> | optional | Array&lt;[LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse")&gt; | See [LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse") for more information. |

<h4 class="schema-object-example" id="LocalitiesAutocompleteCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "localities": [
    {
      "public_id": "Ch6qA8cLmvyvEEoFy6nYeFcEdNU=",
      "type": "locality",
      "types": [
        "locality",
        "city"
      ],
      "description": "London, City of London, United Kingdom",
      "matched_substrings": {
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      }
    },
    {
      "public_id": "m/T2C4YI2LgszkKXrELBC+9dfC8=",
      "type": "locality",
      "types": [
        "locality",
        "city"
      ],
      "description": "Derry/Londonderry, Derry City and Strabane, United Kingdom",
      "matched_substrings": {
        "description": [
          {
            "offset": 6,
            "length": 4
          }
        ]
      }
    },
    {
      "public_id": "J6eISGMjjvQwPkao8rsByB3aVwM=",
      "type": "locality",
      "types": [
        "locality",
        "village"
      ],
      "description": "London Colney, Hertfordshire, United Kingdom",
      "matched_substrings": {
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      }
    },
    {
      "public_id": "4Ew1mvbob3vobGMQ44AdRNY/5xE=",
      "type": "locality",
      "types": [
        "locality",
        "village"
      ],
      "description": "Little London, Hampshire, United Kingdom",
      "matched_substrings": {
        "description": [
          {
            "offset": 7,
            "length": 4
          }
        ]
      }
    },
    {
      "public_id": "S/5AkUmMBhX35qVI2jR38+dALwk=",
      "type": "locality",
      "types": [
        "locality",
        "city"
      ],
      "description": "City of London, United Kingdom",
      "matched_substrings": {
        "description": [
          {
            "offset": 8,
            "length": 4
          }
        ]
      }
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesAutocompleteCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesAutocompleteCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesautocompletecollectionresponse] -->
