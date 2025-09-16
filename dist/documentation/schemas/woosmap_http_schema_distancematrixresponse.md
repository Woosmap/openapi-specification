<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancematrixresponse] -->
<h3 class="schema-object" id="DistanceMatrixResponse">DistanceMatrixResponse</h3>

Attributes describing an distance Matrix response.

| Field                                                                                                       | Required | Type                                                                                                            | Description                                                                                                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceMatrixResponse-rows" class="add-link schema-object-property-key"><code>rows</code></h4>     | optional | Array&lt;[DistanceMatrixElementsResponse](#DistanceMatrixElementsResponse "DistanceMatrixElementsResponse")&gt; | <div class="ref-property-description"><p>Contains an array of elements for each pair of origin and destination</p><p>See <a href="#DistanceMatrixElementsResponse">DistanceMatrixElementsResponse</a> for more information.</div> |
| <h4 id="DistanceMatrixResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional | [DistanceStatus](#DistanceStatus "DistanceStatus")                                                              | See [DistanceStatus](#DistanceStatus "DistanceStatus") for more information.                                                                                                                                                      |

<h4 class="schema-object-example" id="DistanceMatrixResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "status": "OK",
  "rows": [
    {
      "elements": [
        {
          "status": "OK",
          "duration": {
            "value": 978,
            "text": "16 mins"
          },
          "distance": {
            "value": 10796,
            "text": "10.8 km"
          }
        },
        {
          "status": "OK",
          "duration": {
            "value": 942,
            "text": "16 mins"
          },
          "distance": {
            "value": 10322,
            "text": "10.3 km"
          }
        }
      ]
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancematrixresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceMatrixResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancematrixresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceMatrixResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancematrixresponse] -->
