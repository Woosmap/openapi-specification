<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancetollselementsresponse] -->
<h3 class="schema-object" id="DistanceTollsElementsResponse">DistanceTollsElementsResponse</h3>

Attributes describing routes from an origin to a destination returned in distance tolls response.

| Field                                                                                                                                    | Required     | Type                                                                  | Description                                                                                                                                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceTollsElementsResponse-bounds" class="add-link schema-object-property-key"><code>bounds</code></h4>                       | **required** | [Bounds](#Bounds "Bounds")                                            | See [Bounds](#Bounds "Bounds") for more information.                                                                                                            |
| <h4 id="DistanceTollsElementsResponse-legs" class="add-link schema-object-property-key"><code>legs</code></h4>                           | **required** | Array&lt;[DistanceTollsLeg](#DistanceTollsLeg "DistanceTollsLeg")&gt; | <div class="ref-property-description"><p>Legs part of the route response</p><p>See <a href="#DistanceTollsLeg">DistanceTollsLeg</a> for more information.</div> |
| <h4 id="DistanceTollsElementsResponse-overview_polyline" class="add-link schema-object-property-key"><code>overview_polyline</code></h4> | **required** | [EncodedPolyline](#EncodedPolyline "EncodedPolyline")                 | See [EncodedPolyline](#EncodedPolyline "EncodedPolyline") for more information.                                                                                 |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancetollselementsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceTollsElementsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancetollselementsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceTollsElementsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancetollselementsresponse] -->
