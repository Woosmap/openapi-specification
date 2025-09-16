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
        "points": "a_~kHgrhXu@yAe@y@c@q@e@q@c@o@e@m@y@eAa@g@a@c@Y[UUQQYUQOSOQKSKOKQISIWKSEUEMCQAa@CeA@[E}@EUAOEOGKKIOM[I]Ea@A[?QBIBU?WFWDOLUP[P]j@y@^g@`@i@NUNONMJKJIFELCJBJAHGFIDMBSASBKDILURa@LWt@eAHO"
      },
      "bounds": {
        "northeast": {
          "lat": 49.315678,
          "lng": 4.152915
        },
        "southwest": {
          "lat": 49.31073,
          "lng": 4.145162
        }
      },
      "notice": "",
      "legs": [
        {
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
          "start_address": "D 151",
          "steps": [
            {
              "distance": "676 m",
              "duration": "1 min",
              "polyline": "a_~kHgrhXu@yAe@y@c@q@e@q@c@o@e@m@y@eAa@g@a@c@Y[UUQQYUQOSOQKSKOKQISIWKSEUEMCQAa@CeA@[E}@EUAOEOGKKIOM[I]Ea@A[?Q",
              "start_location": {
                "lat": 49.31073,
                "lng": 4.145163
              },
              "end_location": {
                "lat": 49.315679,
                "lng": 4.149621
              },
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 2,
                "summary": "Drive northeast on D 151.",
                "verbal_succint": "Drive northeast. Then Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_before": "Drive northeast on D 151. Then Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_after": "Continue for 700 meters."
              }
            },
            {
              "distance": "22 m",
              "duration": "1 min",
              "polyline": "}}~kHcniXBIBU?W",
              "start_location": {
                "lat": 49.315679,
                "lng": 4.149621
              },
              "end_location": {
                "lat": 49.31563,
                "lng": 4.149905
              },
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 26,
                "summary": "Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_alert": "Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_succint": "Enter the roundabout and take the 2nd exit.",
                "verbal_before": "Enter the roundabout and take the 2nd exit onto D 30."
              }
            },
            {
              "distance": "198 m",
              "duration": "1 min",
              "polyline": "u}~kH{oiXFWDOLUP[P]j@y@^g@`@i@NUNONMJKJIFELC",
              "start_location": {
                "lat": 49.31563,
                "lng": 4.149905
              },
              "end_location": {
                "lat": 49.314292,
                "lng": 4.151623
              },
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 27,
                "summary": "Exit the roundabout onto D 30.",
                "verbal_succint": "Exit the roundabout.",
                "verbal_before": "Exit the roundabout onto D 30.",
                "verbal_after": "Continue for 200 meters."
              }
            },
            {
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
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 26,
                "summary": "Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_alert": "Enter the roundabout and take the 2nd exit onto D 30.",
                "verbal_succint": "Enter the roundabout and take the 2nd exit.",
                "verbal_before": "Enter the roundabout and take the 2nd exit onto D 30."
              }
            },
            {
              "distance": "96 m",
              "duration": "1 min",
              "polyline": "ws~kHy|iXBKDILURa@LWt@eAHO",
              "start_location": {
                "lat": 49.314041,
                "lng": 4.151976
              },
              "end_location": {
                "lat": 49.313431,
                "lng": 4.152916
              },
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 27,
                "summary": "Exit the roundabout onto D 30.",
                "verbal_succint": "Exit the roundabout. Then, in 100 meters, You will arrive at your destination.",
                "verbal_before": "Exit the roundabout onto D 30. Then, in 100 meters, You will arrive at your destination.",
                "verbal_after": "Continue for 100 meters."
              }
            },
            {
              "distance": "1 m",
              "duration": "1 min",
              "polyline": "}o~kHubjX",
              "start_location": {
                "lat": 49.313431,
                "lng": 4.152916
              },
              "end_location": {
                "lat": 49.313431,
                "lng": 4.152916
              },
              "travel_mode": "DRIVING",
              "instructions": {
                "action": 4,
                "summary": "You have arrived at your destination.",
                "verbal_alert": "You will arrive at your destination.",
                "verbal_before": "You have arrived at your destination."
              }
            }
          ]
        }
      ],
      "main_route_name": "D 151",
      "recommended": true
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancerouteresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceRouteResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancerouteresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceRouteResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancerouteresponse] -->
