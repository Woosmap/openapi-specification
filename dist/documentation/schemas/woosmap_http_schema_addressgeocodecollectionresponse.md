<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_addressgeocodecollectionresponse] -->
<h3 class="schema-object" id="AddressGeocodeCollectionResponse">AddressGeocodeCollectionResponse</h3>

Address Geocode Collection Response. Contains one or more Addresses with coordinates (default to one result for reverse geocoding)

| Field                                                                                                                   | Required | Type                                                                                    | Description                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <h4 id="AddressGeocodeCollectionResponse-results" class="add-link schema-object-property-key"><code>results</code></h4> | optional | Array&lt;[AddressGeocodeResponse](#AddressGeocodeResponse "AddressGeocodeResponse")&gt; | See [AddressGeocodeResponse](#AddressGeocodeResponse "AddressGeocodeResponse") for more information. |
| <h4 id="AddressGeocodeCollectionResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>   | optional | [AddressStatus](#AddressStatus "AddressStatus")                                         | See [AddressStatus](#AddressStatus "AddressStatus") for more information.                            |

<h4 class="schema-object-example" id="AddressGeocodeCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "formatted_address": "Place de la Résistance, 75007 Paris, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Ile-de-France",
          "short_name": "IDF"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Paris",
          "short_name": "Paris"
        },
        {
          "long_name": "Paris",
          "short_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "7th Arrondissement",
          "short_name": "7th Arrondissement",
          "types": [
            "district"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "75007",
          "short_name": "75007",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 48.86228,
          "lng": 2.30345
        },
        "viewport": {
          "northeast": {
            "lat": 48.86231,
            "lng": 2.30544
          },
          "southwest": {
            "lat": 48.86191,
            "lng": 2.30147
          }
        }
      }
    }
  ],
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-addressgeocodecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AddressGeocodeCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-addressgeocodecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AddressGeocodeCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_addressgeocodecollectionresponse] -->
