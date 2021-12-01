<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_geolocationresponse] -->
<h3 class="schema-object" id="GeolocationResponse">GeolocationResponse</h3>

A successful geolocation request will return a JSON-formatted response defining a location and radius.

| Field                                                                                                                | Required     | Type                       | Description                                                                                                                                                                                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="GeolocationResponse-accuracy" class="add-link schema-object-property-key"><code>accuracy</code></h4>         | **required** | number                     | <div class="nonref-property-description"><p>The accuracy of the estimated location, in meters. This represents the radius of a circle around the given <code>location</code> where the IP address is likely to be. If your Geolocation response shows a low value in the <code>accuracy</code> field (&#x3C;=50), the IP has strong chance to be correctly located.</p></div> |
| <h4 id="GeolocationResponse-city" class="add-link schema-object-property-key"><code>city</code></h4>                 | optional     | string                     | <div class="nonref-property-description"><p>City name when available</p></div>                                                                                                                                                                                                                                                                                                |
| <h4 id="GeolocationResponse-continent" class="add-link schema-object-property-key"><code>continent</code></h4>       | optional     | string                     | <div class="nonref-property-description"><p>Continent name</p></div>                                                                                                                                                                                                                                                                                                          |
| <h4 id="GeolocationResponse-country_code" class="add-link schema-object-property-key"><code>country_code</code></h4> | optional     | string                     | <div class="nonref-property-description"><p>ISO 3166-1 Alpha-2 compatible country code</p></div>                                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationResponse-country_name" class="add-link schema-object-property-key"><code>country_name</code></h4> | optional     | string                     | <div class="nonref-property-description"><p>Country name</p></div>                                                                                                                                                                                                                                                                                                            |
| <h4 id="GeolocationResponse-latitude" class="add-link schema-object-property-key"><code>latitude</code></h4>         | optional     | number                     | <div class="nonref-property-description"><p>Approximate latitude of the geographical area associated with the IP address</p></div>                                                                                                                                                                                                                                            |
| <h4 id="GeolocationResponse-longitude" class="add-link schema-object-property-key"><code>longitude</code></h4>       | optional     | number                     | <div class="nonref-property-description"><p>Approximate longitude of the geographical area associated with the IP address</p></div>                                                                                                                                                                                                                                           |
| <h4 id="GeolocationResponse-postal_code" class="add-link schema-object-property-key"><code>postal_code</code></h4>   | optional     | string                     | <div class="nonref-property-description"><p>A postal code close to the user's location, when available</p></div>                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationResponse-region_state" class="add-link schema-object-property-key"><code>region_state</code></h4> | optional     | string                     | <div class="nonref-property-description"><p>Region name when available</p></div>                                                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationResponse-timezone" class="add-link schema-object-property-key"><code>timezone</code></h4>         | optional     | string                     | <div class="nonref-property-description"><p>The time zone associated with location, as specified by the IANA Time Zone Database</p></div>                                                                                                                                                                                                                                     |
| <h4 id="GeolocationResponse-viewport" class="add-link schema-object-property-key"><code>viewport</code></h4>         | optional     | [Bounds](#Bounds "Bounds") | See [Bounds](#Bounds "Bounds") for more information.                                                                                                                                                                                                                                                                                                                          |

<h4 class="schema-object-example" id="GeolocationResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "country_code": "FR",
  "country_name": "France",
  "continent": "Europe",
  "latitude": 48.8323,
  "longitude": 2.4075,
  "accuracy": 200,
  "viewport": {
    "northeast": {
      "lat": 50.628930568239035,
      "lng": 5.136987883597163
    },
    "southwest": {
      "lat": 47.03566943176095,
      "lng": -0.3219878835971626
    }
  },
  "postal_code": "75003",
  "timezone": "Europe/Paris"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-geolocationresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/GeolocationResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a data-label="openapi-github-woosmap-http-schema-geolocationresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - GeolocationResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_geolocationresponse] -->