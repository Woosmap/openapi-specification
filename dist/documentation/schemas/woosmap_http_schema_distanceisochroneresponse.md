<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distanceisochroneresponse] -->
<h3 class="schema-object" id="DistanceIsochroneResponse">DistanceIsochroneResponse</h3>

Attributes describing a distance isochrone response.

| Field                                                                                                            | Required | Type                                               | Description                                                                              |
| :--------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <h4 id="DistanceIsochroneResponse-isoline" class="add-link schema-object-property-key"><code>isoline</code></h4> | optional | object                                             | <div class="nonref-property-description"><p>Contains the properties of isoline</p></div> |
| <h4 id="DistanceIsochroneResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>   | optional | [DistanceStatus](#DistanceStatus "DistanceStatus") | See [DistanceStatus](#DistanceStatus "DistanceStatus") for more information.             |

<h4 class="schema-object-example" id="DistanceIsochroneResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "status": "OK",
  "isoline": {
    "origin": {
      "lat": 48.709,
      "lng": 2.403
    },
    "distance": {
      "value": 1,
      "text": "1 km"
    },
    "geometry": "s|ihHouuMZ`GdClCsA~QhCnQmBhEpCfF|HxGpBtFfEnBnHqJpH}AF_EeCcB@sBnEiEYiGmVyFaG{G[eFoCw@gAiIkDYg@_DwA@"
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distanceisochroneresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceIsochroneResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distanceisochroneresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceIsochroneResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distanceisochroneresponse] -->
