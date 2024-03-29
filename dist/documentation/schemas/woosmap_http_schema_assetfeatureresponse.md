<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetfeatureresponse] -->
<h3 class="schema-object" id="AssetFeatureResponse">AssetFeatureResponse</h3>

Asset Response as a GeoJSon Feature with Asset properties

| Field                                                                                                             | Required | Type                                            | Description                                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetFeatureResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>     | optional | [GeoJsonPoint](#GeoJsonPoint "GeoJsonPoint")    | See [GeoJsonPoint](#GeoJsonPoint "GeoJsonPoint") for more information.                                                                                          |
| <h4 id="AssetFeatureResponse-properties" class="add-link schema-object-property-key"><code>properties</code></h4> | optional | [AssetResponse](#AssetResponse "AssetResponse") | See [AssetResponse](#AssetResponse "AssetResponse") for more information.                                                                                       |
| <h4 id="AssetFeatureResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>             | optional | string                                          | <div class="nonref-property-description"><p>the Geojson Type (only 'Feature')</p><div class="notranslate">The allowed values include: and `Feature`</div></div> |

<h4 class="schema-object-example" id="AssetFeatureResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "type": "Feature",
  "properties": {
    "store_id": "10031",
    "name": "Santa Rosa & Yolanda",
    "contact": {
      "phone": "707-527-1006",
      "website": "https://www.starbucks.com/store-locator/store/10031/santa-rosa-yolanda-2688-santa-rosa-ave-santa-rosa-ca-954077625-us"
    },
    "address": {
      "lines": [
        "2688 Santa Rosa Ave",
        "Santa Rosa, CA 95407"
      ],
      "country_code": "US",
      "city": "Santa Rosa",
      "zipcode": "954077625"
    },
    "user_properties": {
      "take_away": "available"
    },
    "tags": [
      "DT",
      "WA",
      "CD",
      "DR",
      "LB",
      "GO",
      "XO",
      "MX",
      "NB",
      "BE",
      "LU"
    ],
    "types": [
      "Coffee shop"
    ],
    "last_updated": "2022-11-10T13:26:55.066524+00:00",
    "open": {
      "open_now": true,
      "open_hours": [
        {
          "end": "20:00",
          "start": "05:00"
        }
      ],
      "week_day": 3,
      "current_slice": {
        "end": "20:00",
        "start": "05:00"
      }
    },
    "weekly_opening": {
      "1": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "2": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "3": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "4": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "5": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "6": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "7": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "timezone": "America/Los_Angeles"
    },
    "opening_hours": {
      "usual": {
        "1": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "2": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "3": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "4": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "5": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "6": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "7": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ]
      },
      "special": {},
      "timezone": "America/Los_Angeles"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -122.712924,
      38.41244
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetfeatureresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetFeatureResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetfeatureresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetFeatureResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetfeatureresponse] -->
