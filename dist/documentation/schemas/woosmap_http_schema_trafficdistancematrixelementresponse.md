<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistancematrixelementresponse] -->
<h3 class="schema-object" id="TrafficDistanceMatrixElementResponse">TrafficDistanceMatrixElementResponse</h3>

Attributes describing an element of origin and destination returned in Traffic Distance Matrix response.

| Field                                                                                                                                                   | Required | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceMatrixElementResponse-distance" class="add-link schema-object-property-key"><code>distance</code></h4>                           | optional | object | <div class="nonref-property-description"><p>The total distance of this route, expressed in meters (value) and as text. The textual value uses the unit system specified with the units parameter of the original request.</p></div>                                                                                                                                                                                                                                                                                                   |
| <h4 id="TrafficDistanceMatrixElementResponse-duration_with_traffic" class="add-link schema-object-property-key"><code>duration_with_traffic</code></h4> | optional | object | <div class="nonref-property-description"><p>The total duration to travel this route, expressed in seconds (value) and as text. The textual value gives a structured string for duration in the specified language (if available).</p></div>                                                                                                                                                                                                                                                                                           |
| <h4 id="TrafficDistanceMatrixElementResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>                               | optional | string | <div class="nonref-property-description"><p>Status returned for Distance Matrix Element Response.</p><ul><li><code>OK</code> indicates the response contains a valid result.</li><li><code>NOT_FOUND</code> indicates that the origin and/or destination of this pairing could not be matched to the network.</li><li><code>ZERO_RESULTS</code> indicates no route could be found between the origin and destination.</li></ul><div class="notranslate">The allowed values include: `OK`, `NOT_FOUND`, and `ZERO_RESULTS`</div></div> |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixelementresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceMatrixElementResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixelementresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceMatrixElementResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistancematrixelementresponse] -->