<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistancerouteelementsresponse] -->
<h3 class="schema-object" id="TrafficDistanceRouteElementsResponse">TrafficDistanceRouteElementsResponse</h3>

Attributes describing routes from an origin to a destination returned in traffic distance route response.

| Field                                                                                                                                           | Required | Type                                                                        | Description                                                                                                                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceRouteElementsResponse-bounds" class="add-link schema-object-property-key"><code>bounds</code></h4>                       | optional | [Bounds](#Bounds "Bounds")                                                  | See [Bounds](#Bounds "Bounds") for more information.                                                                                                                |
| <h4 id="TrafficDistanceRouteElementsResponse-legs" class="add-link schema-object-property-key"><code>legs</code></h4>                           | optional | Array&lt;[TrafficDistanceLeg](#TrafficDistanceLeg "TrafficDistanceLeg")&gt; | <div class="ref-property-description"><p>Legs part of the route response</p><p>See <a href="#TrafficDistanceLeg">TrafficDistanceLeg</a> for more information.</div> |
| <h4 id="TrafficDistanceRouteElementsResponse-overview_polyline" class="add-link schema-object-property-key"><code>overview_polyline</code></h4> | optional | [EncodedPolyline](#EncodedPolyline "EncodedPolyline")                       | See [EncodedPolyline](#EncodedPolyline "EncodedPolyline") for more information.                                                                                     |
| <h4 id="TrafficDistanceRouteElementsResponse-summary" class="add-link schema-object-property-key"><code>summary</code></h4>                     | optional | string                                                                      | <div class="nonref-property-description"><p>A short name for the route.</p></div>                                                                                   |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistancerouteelementsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceRouteElementsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistancerouteelementsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceRouteElementsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistancerouteelementsresponse] -->
