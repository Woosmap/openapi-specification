<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesgeocodecollectionresponse] -->
<h3 class="schema-object" id="LocalitiesGeocodeCollectionResponse">LocalitiesGeocodeCollectionResponse</h3>

Localities Geocode Collection Response. Contains one or more detailed Localities or Addresses in FR or in the UK, with coordinates (default to one result for reverse geocoding)

| Field                                                                                                                      | Required | Type                                                                                             | Description                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesGeocodeCollectionResponse-results" class="add-link schema-object-property-key"><code>results</code></h4> | optional | Array&lt;[LocalitiesGeocodeResponse](#LocalitiesGeocodeResponse "LocalitiesGeocodeResponse")&gt; | See [LocalitiesGeocodeResponse](#LocalitiesGeocodeResponse "LocalitiesGeocodeResponse") for more information. |

<h4 class="schema-object-example" id="LocalitiesGeocodeCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "public_id": "0+FTYd/1MsiBSxLAKq+/Fiyy+uM=",
      "types": [
        "address",
        "route"
      ],
      "formatted_address": "Place Jeanne D'Arc, 75013, Paris",
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "France",
          "short_name": "FR"
        },
        {
          "types": [
            "state",
            "division_level_1"
          ],
          "long_name": "Île-de-France",
          "short_name": "Île-de-France"
        },
        {
          "types": [
            "administrative_area_level_1",
            "county",
            "division_level_2"
          ],
          "long_name": "Paris",
          "short_name": "Paris"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "Paris",
          "short_name": "Paris"
        },
        {
          "types": [
            "postal_codes"
          ],
          "long_name": "75013",
          "short_name": "75013"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Place Jeanne D'Arc",
          "short_name": "Place Jeanne D'Arc"
        }
      ],
      "geometry": {
        "location": {
          "lat": 48.829405,
          "lng": 2.367944
        },
        "location_type": "GEOMETRIC_CENTER"
      },
      "scores_per_components": {
        "street_name": 1
      }
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesgeocodecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesGeocodeCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesgeocodecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesGeocodeCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesgeocodecollectionresponse] -->
