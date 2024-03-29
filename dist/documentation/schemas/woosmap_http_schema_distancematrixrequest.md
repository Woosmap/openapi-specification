<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancematrixrequest] -->
<h3 class="schema-object" id="DistanceMatrixRequest">DistanceMatrixRequest</h3>

Attributes describing a distance Matrix request

| Field                                                                                                                      | Required     | Type                                         | Description                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceMatrixRequest-destinations" class="add-link schema-object-property-key"><code>destinations</code></h4>     | **required** | [Destinations](#Destinations "Destinations") | See [Destinations](#Destinations "Destinations") for more information.                                                                                                                                                                                                                                                                |
| <h4 id="DistanceMatrixRequest-origins" class="add-link schema-object-property-key"><code>origins</code></h4>               | **required** | [Origins](#Origins "Origins")                | See [Origins](#Origins "Origins") for more information.                                                                                                                                                                                                                                                                               |
| <h4 id="DistanceMatrixRequest-departure_time" class="add-link schema-object-property-key"><code>departure_time</code></h4> | optional     | string                                       | <div class="nonref-property-description"><p>Specifies the date/time at which to base the calculations on for traffic purposes. Valid values are a timestamp (e.g. <code>1600799173</code> for the date:<code>22/09/2020 20:26:13</code>) or <code>now</code>.</p></div>                                                               |
| <h4 id="DistanceMatrixRequest-elements" class="add-link schema-object-property-key"><code>elements</code></h4>             | optional     | string                                       | <div class="nonref-property-description"><p>Specifies element values that will be part of the API response (distance and/or duration). if not specified default is <code>distance</code></p><div class="notranslate">The allowed values include: `distance`, `duration`, and `duration_distance`</div></div>                          |
| <h4 id="DistanceMatrixRequest-language" class="add-link schema-object-property-key"><code>language</code></h4>             | optional     | string                                       | <div class="nonref-property-description"><p>The language code, indicating in which language the results should be returned, if possible. If language is not supplied, the Distance API service will use the navigator language or “en”.</p></div>                                                                                     |
| <h4 id="DistanceMatrixRequest-method" class="add-link schema-object-property-key"><code>method</code></h4>                 | optional     | string                                       | <div class="nonref-property-description"><p>Specifies the method to compute the route between the start point and the end point:</p><ul><li><code>time</code>: fastest route (default)</li><li><code>distance</code>: shortest route</li></ul><div class="notranslate">The allowed values include: `time`, and `distance`</div></div> |
| <h4 id="DistanceMatrixRequest-mode" class="add-link schema-object-property-key"><code>mode</code></h4>                     | optional     | string                                       | <div class="nonref-property-description"><p>Specifies the mode of transport to use when calculating distance</p><div class="notranslate">The allowed values include: `driving`, `cycling`, and `walking`</div></div>                                                                                                                  |
| <h4 id="DistanceMatrixRequest-units" class="add-link schema-object-property-key"><code>units</code></h4>                   | optional     | [Units](#Units "Units")                      | See [Units](#Units "Units") for more information.                                                                                                                                                                                                                                                                                     |

<h4 class="schema-object-example" id="DistanceMatrixRequest-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "elements": "duration_distance",
  "method": "distance",
  "departure_time": "now"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancematrixrequest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceMatrixRequest.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancematrixrequest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceMatrixRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancematrixrequest] -->
