<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistanceleg] -->
<h3 class="schema-object" id="TrafficDistanceLeg">TrafficDistanceLeg</h3>

Leg in a route

| Field                                                                                                                                       | Required | Type                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceLeg-distance" class="add-link schema-object-property-key"><code>distance</code></h4>                                 | optional | object                                          | <div class="nonref-property-description"><p>The total distance covered by this leg.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <h4 id="TrafficDistanceLeg-duration_with_traffic" class="add-link schema-object-property-key"><code>duration_with_traffic</code></h4>       | optional | object                                          | <div class="nonref-property-description"><p>The duration of the leg, considering the traffic.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                              |
| <h4 id="TrafficDistanceLeg-duration_without_traffic" class="add-link schema-object-property-key"><code>duration_without_traffic</code></h4> | optional | object                                          | <div class="nonref-property-description"><p>The duration of the leg, considering no traffic.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                               |
| <h4 id="TrafficDistanceLeg-end_location" class="add-link schema-object-property-key"><code>end_location</code></h4>                         | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | <div class="ref-property-description"><p>The latitude/longitude coordinates of the given destination of this leg. Because the Traffic Distance Route API calculates directions between locations by using the nearest transportation option (usually a road) at the start and end points, <code>end_location</code> may be different than the provided destination of this leg if, for example, a road is not near the destination.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div> |
| <h4 id="TrafficDistanceLeg-start_location" class="add-link schema-object-property-key"><code>start_location</code></h4>                     | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | <div class="ref-property-description"><p>The latitude/longitude coordinates of the origin of this leg. Because the Traffic Distance Route API calculates directions between locations by using the nearest transportation option (usually a road) at the start and end points, <code>start_location</code> may be different than the provided origin of this leg if, for example, a road is not near the origin.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div>                    |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistanceleg" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceLeg.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistanceleg" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceLeg" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistanceleg] -->