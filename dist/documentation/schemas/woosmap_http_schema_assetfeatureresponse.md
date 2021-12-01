<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetfeatureresponse] -->
<h3 class="schema-object" id="AssetFeatureResponse">AssetFeatureResponse</h3>

Asset Response as a GeoJSon Feature with Asset properties

| Field                                                                                                             | Required     | Type                                            | Description                                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetFeatureResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>     | **required** | [GeoJsonPoint](#GeoJsonPoint "GeoJsonPoint")    | See [GeoJsonPoint](#GeoJsonPoint "GeoJsonPoint") for more information.                                                                                          |
| <h4 id="AssetFeatureResponse-properties" class="add-link schema-object-property-key"><code>properties</code></h4> | **required** | [AssetResponse](#AssetResponse "AssetResponse") | See [AssetResponse](#AssetResponse "AssetResponse") for more information.                                                                                       |
| <h4 id="AssetFeatureResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>             | **required** | string                                          | <div class="nonref-property-description"><p>the Geojson Type (only 'Feature')</p><div class="notranslate">The allowed values include: and `Feature`</div></div> |

<h4 class="schema-object-example" id="AssetFeatureResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "type": "Feature",
  "properties": {
    "store_id": "boroughmarket",
    "name": "Borough Market",
    "contact": {
      "phone": "020 7407 1002",
      "website": "http://boroughmarket.org.uk"
    },
    "address": {
      "lines": [
        "8 Southwark St"
      ],
      "country_code": "UK",
      "city": "London",
      "zipcode": "SE1 1TL"
    },
    "user_properties": {
      "photo": "https://preview.webgeoservices.com/jsfiddle/boroughmarket.jpeg",
      "placeId": "ChIJD2bPdVcDdkgRiDyO6mrCsu4"
    },
    "tags": [],
    "types": [
      "covered"
    ],
    "open": {
      "open_now": true,
      "open_hours": [
        {
          "end": "17:00",
          "start": "10:00"
        }
      ],
      "week_day": 3,
      "current_slice": {
        "end": "17:00",
        "start": "10:00"
      }
    },
    "weekly_opening": {
      "1": {
        "hours": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "2": {
        "hours": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "3": {
        "hours": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "4": {
        "hours": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "5": {
        "hours": [
          {
            "end": "18:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "6": {
        "hours": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ],
        "isSpecial": false
      },
      "7": {
        "hours": [],
        "isSpecial": false
      },
      "timezone": "Europe/London"
    },
    "opening_hours": {
      "usual": {
        "5": [
          {
            "end": "18:00",
            "start": "10:00"
          }
        ],
        "7": [],
        "default": [
          {
            "end": "17:00",
            "start": "10:00"
          }
        ]
      },
      "timezone": "Europe/London"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -0.090679,
      51.505046
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetfeatureresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetFeatureResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetfeatureresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetFeatureResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetfeatureresponse] -->