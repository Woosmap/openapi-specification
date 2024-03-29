<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancestep] -->
<h3 class="schema-object" id="DistanceStep">DistanceStep</h3>

step in a leg

| Field                                                                                                             | Required | Type                                                                 | Description                                                                                                                                                                                                                  |
| :---------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceStep-distance" class="add-link schema-object-property-key"><code>distance</code></h4>             | optional | string                                                               | <div class="nonref-property-description"><p>the distance as text covered by this step until the next step.</p></div>                                                                                                         |
| <h4 id="DistanceStep-duration" class="add-link schema-object-property-key"><code>duration</code></h4>             | optional | string                                                               | <div class="nonref-property-description"><p>the typical time as text required to perform the step, until the next step</p></div>                                                                                             |
| <h4 id="DistanceStep-end_location" class="add-link schema-object-property-key"><code>end_location</code></h4>     | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                      | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                                                                                                                                                    |
| <h4 id="DistanceStep-instructions" class="add-link schema-object-property-key"><code>instructions</code></h4>     | optional | [DistanceInstructions](#DistanceInstructions "DistanceInstructions") | See [DistanceInstructions](#DistanceInstructions "DistanceInstructions") for more information.                                                                                                                               |
| <h4 id="DistanceStep-polyline" class="add-link schema-object-property-key"><code>polyline</code></h4>             | optional | string                                                               | <div class="nonref-property-description"><p>the polyline representation of the step (encoded with the <a href="https://developers.google.com/maps/documentation/utilities/polylinealgorithm">poyline algorithm</a></p></div> |
| <h4 id="DistanceStep-start_location" class="add-link schema-object-property-key"><code>start_location</code></h4> | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                      | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                                                                                                                                                    |
| <h4 id="DistanceStep-travel_mode" class="add-link schema-object-property-key"><code>travel_mode</code></h4>       | optional | string                                                               | <div class="nonref-property-description"><p>the type of travel mode used</p></div>                                                                                                                                           |

<h4 class="schema-object-example" id="DistanceStep-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "distance": "46 m",
  "duration": "1 min",
  "polyline": "iu~kHsziXJBJAHGFIDMBSAS",
  "start_location": {
    "lat": 49.314292,
    "lng": 4.151623
  },
  "end_location": {
    "lat": 49.314041,
    "lng": 4.151976
  },
  "travel_mode": "DRIVING"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancestep" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceStep.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancestep" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceStep" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancestep] -->
