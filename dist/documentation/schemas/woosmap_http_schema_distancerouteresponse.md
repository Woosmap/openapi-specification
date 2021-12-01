<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancerouteresponse] -->
<h3 class="schema-object" id="DistanceRouteResponse">DistanceRouteResponse</h3>

Attributes describing a distance route response.

| Field                                                                                                      | Required | Type                                                                                                         | Description                                                                                                                                                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <h4 id="DistanceRouteResponse-routes" class="add-link schema-object-property-key"><code>routes</code></h4> | optional | Array&lt;[DistanceRouteElementsResponse](#DistanceRouteElementsResponse "DistanceRouteElementsResponse")&gt; | <div class="ref-property-description"><p>Contains an array of routes from origin to destination (only one if alternatives is not specified)</p><p>See <a href="#DistanceRouteElementsResponse">DistanceRouteElementsResponse</a> for more information.</div> |
| <h4 id="DistanceRouteResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional | [DistanceStatus](#DistanceStatus "DistanceStatus")                                                           | See [DistanceStatus](#DistanceStatus "DistanceStatus") for more information.                                                                                                                                                                                 |

<h4 class="schema-object-example" id="DistanceRouteResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "status": "OK",
  "routes": [
    {
      "overview_polyline": {
        "points": "gce_I|mbHR_@Rg@Pg@Nm@Ns@Hk@Fk@PyBTaCXmCZcCd@qCLw@ViA\\}ADQ@K@O?S?[AUGUC[AW@WB[DUJ[Va@RMn@c@TKXGPANAN@t@NZD~AV`AL`ANTBfBV`@F|ATjFr@vEr@D@`@DF?`@BD?V@lEXx@Dv@D^B`@Db@BP@n@BJ@j@Bb@D\\BzAHFaDB}ABqA@}A@kA?k@?a@Ae@Ac@Ek@Ge@Km@Oo@Qm@Ok@Uk@Sg@Ui@[i@]g@]g@WYSUe@a@s@e@m@e@WYO[`@kCtAoKl@uFH}@Ls@r@yE`AyFBO"
      },
      "bounds": {
        "northeast": {
          "lat": 52.4602,
          "lng": -1.47218
        },
        "southwest": {
          "lat": 52.44837,
          "lng": -1.49231
        }
      },
      "summary": "",
      "legs": [
        {
          "distance": {
            "text": "2.8 km",
            "value": 2775.1
          },
          "duration": {
            "text": "5 mins",
            "value": 272.5
          },
          "start_location": {
            "lat": 52.460198,
            "lng": -1.492308
          },
          "end_location": {
            "lat": 52.449069,
            "lng": -1.472178
          }
        }
      ]
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancerouteresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceRouteResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancerouteresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceRouteResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancerouteresponse] -->