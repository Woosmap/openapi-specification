<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distanceleg] -->
<h3 class="schema-object" id="DistanceLeg">DistanceLeg</h3>

Leg in a route

| Field                                                                                                            | Required | Type                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceLeg-distance" class="add-link schema-object-property-key"><code>distance</code></h4>             | optional | [DistanceValue](#DistanceValue "DistanceValue")           | See [DistanceValue](#DistanceValue "DistanceValue") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <h4 id="DistanceLeg-duration" class="add-link schema-object-property-key"><code>duration</code></h4>             | optional | [DurationValue](#DurationValue "DurationValue")           | See [DurationValue](#DurationValue "DurationValue") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <h4 id="DistanceLeg-end_address" class="add-link schema-object-property-key"><code>end_address</code></h4>       | optional | string                                                    | <div class="nonref-property-description"><p>the ending address of the leg</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <h4 id="DistanceLeg-end_location" class="add-link schema-object-property-key"><code>end_location</code></h4>     | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")           | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <h4 id="DistanceLeg-end_waypoint" class="add-link schema-object-property-key"><code>end_waypoint</code></h4>     | optional | integer                                                   | <div class="nonref-property-description"><p>The end waypoint order number</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <h4 id="DistanceLeg-start_address" class="add-link schema-object-property-key"><code>start_address</code></h4>   | optional | string                                                    | <div class="nonref-property-description"><p>the starting address of the leg</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <h4 id="DistanceLeg-start_location" class="add-link schema-object-property-key"><code>start_location</code></h4> | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")           | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <h4 id="DistanceLeg-start_waypoint" class="add-link schema-object-property-key"><code>start_waypoint</code></h4> | optional | integer                                                   | <div class="nonref-property-description"><p>The start waypoint order number</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <h4 id="DistanceLeg-steps" class="add-link schema-object-property-key"><code>steps</code></h4>                   | optional | Array&lt;[DistanceStep](#DistanceStep "DistanceStep")&gt; | <div class="ref-property-description"><p>List of steps constituting the leg. Steps are returned when <code>details=full</code> parameter is specified. A step is the most atomic unit of a route, containing a single step describing a specific, single instruction on the journey. The step not only describes the instruction but also contains distance and duration information relating to how this step relates to the following step.</p><p>See <a href="#DistanceStep">DistanceStep</a> for more information.</div> |

<h4 class="schema-object-example" id="DistanceLeg-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "distance": {
    "text": "1 km",
    "value": 1038
  },
  "duration": {
    "text": "1 min",
    "value": 75
  },
  "start_location": {
    "lat": 49.31067,
    "lng": 4.14525
  },
  "end_location": {
    "lat": 49.31344,
    "lng": 4.15293
  },
  "start_waypoint": 0,
  "end_waypoint": 1,
  "end_address": "D 30",
  "start_address": "D 151"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distanceleg" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceLeg.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distanceleg" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceLeg" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distanceleg] -->
