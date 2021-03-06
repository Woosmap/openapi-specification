<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesdetailsaddressresponse] -->
<h3 class="schema-object" id="LocalitiesDetailsAddressResponse">LocalitiesDetailsAddressResponse</h3>

Attributes describing a locality. Not all attributes will be available for all locality types.

| Field                                                                                                                                         | Required | Type                                                                     | Description                                                                                                                                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesDetailsAddressResponse-address_components" class="add-link schema-object-property-key"><code>address_components</code></h4> | optional | Array&lt;[AddressComponents](#AddressComponents "AddressComponents")&gt; | <div class="ref-property-description"><p>An array containing the separate components applicable to this address.</p><p>See <a href="#AddressComponents">AddressComponents</a> for more information.</div>   |
| <h4 id="LocalitiesDetailsAddressResponse-formatted_address" class="add-link schema-object-property-key"><code>formatted_address</code></h4>   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains the text description of the proposal to be used as suggestion in drop down list if needed.</p></div>                                                   |
| <h4 id="LocalitiesDetailsAddressResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>                     | optional | object                                                                   | <div class="nonref-property-description"><p>The location of the result, in latitude and longitude, eventually associated with a Viewport. Accuracy is also provided for locality of type Address.</p></div> |
| <h4 id="LocalitiesDetailsAddressResponse-public_id" class="add-link schema-object-property-key"><code>public_id</code></h4>                   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains a unique ID for each suggestion. Please use this ID to give feedbacks on results.</p></div>                                                            |
| <h4 id="LocalitiesDetailsAddressResponse-types" class="add-link schema-object-property-key"><code>types</code></h4>                           | optional | Array&lt;[LocalitiesTypes](#LocalitiesTypes "LocalitiesTypes")&gt;       | <div class="ref-property-description"><p>available localities types</p><p>See <a href="#LocalitiesTypes">LocalitiesTypes</a> for more information.</div>                                                    |

<h4 class="schema-object-example" id="LocalitiesDetailsAddressResponse-example">Example</h4>

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
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsaddressresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesDetailsAddressResponse.yml" title="Edit on GitHub">??? Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsaddressresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesDetailsAddressResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesdetailsaddressresponse] -->
