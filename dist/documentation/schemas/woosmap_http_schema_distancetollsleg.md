<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancetollsleg] -->
<h3 class="schema-object" id="DistanceTollsLeg">DistanceTollsLeg</h3>

Leg in a route

| Field                                                                                                                 | Required | Type                                                                                       | Description                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceTollsLeg-distance" class="add-link schema-object-property-key"><code>distance</code></h4>             | optional | [DistanceValue](#DistanceValue "DistanceValue")                                            | See [DistanceValue](#DistanceValue "DistanceValue") for more information.                               |
| <h4 id="DistanceTollsLeg-duration" class="add-link schema-object-property-key"><code>duration</code></h4>             | optional | [DurationValue](#DurationValue "DurationValue")                                            | See [DurationValue](#DurationValue "DurationValue") for more information.                               |
| <h4 id="DistanceTollsLeg-end_location" class="add-link schema-object-property-key"><code>end_location</code></h4>     | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                                            | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                               |
| <h4 id="DistanceTollsLeg-start_location" class="add-link schema-object-property-key"><code>start_location</code></h4> | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                                            | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                               |
| <h4 id="DistanceTollsLeg-tollSystems" class="add-link schema-object-property-key"><code>tollSystems</code></h4>       | optional | Array&lt;[DistanceTollsSystemStep](#DistanceTollsSystemStep "DistanceTollsSystemStep")&gt; | See [DistanceTollsSystemStep](#DistanceTollsSystemStep "DistanceTollsSystemStep") for more information. |
| <h4 id="DistanceTollsLeg-tolls" class="add-link schema-object-property-key"><code>tolls</code></h4>                   | optional | Array&lt;[DistanceTollsStep](#DistanceTollsStep "DistanceTollsStep")&gt;                   | See [DistanceTollsStep](#DistanceTollsStep "DistanceTollsStep") for more information.                   |

<h4 class="schema-object-example" id="DistanceTollsLeg-example">Example</h4>

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
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancetollsleg" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceTollsLeg.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancetollsleg" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceTollsLeg" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancetollsleg] -->
