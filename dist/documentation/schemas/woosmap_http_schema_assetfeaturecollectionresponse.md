<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetfeaturecollectionresponse] -->
<h3 class="schema-object" id="AssetFeatureCollectionResponse">AssetFeatureCollectionResponse</h3>

Assets Collection Response as a GeoJSon FeatureCollection with Asset properties

| Field                                                                                                                       | Required | Type                                                                              | Description                                                                                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetFeatureCollectionResponse-features" class="add-link schema-object-property-key"><code>features</code></h4>     | optional | Array&lt;[AssetFeatureResponse](#AssetFeatureResponse "AssetFeatureResponse")&gt; | <div class="ref-property-description"><p>the Assets Features</p><p>See <a href="#AssetFeatureResponse">AssetFeatureResponse</a> for more information.</div>                         |
| <h4 id="AssetFeatureCollectionResponse-pagination" class="add-link schema-object-property-key"><code>pagination</code></h4> | optional | [Pagination](#Pagination "Pagination")                                            | See [Pagination](#Pagination "Pagination") for more information.                                                                                                                    |
| <h4 id="AssetFeatureCollectionResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>             | optional | string                                                                            | <div class="nonref-property-description"><p>the Geojson Type (only 'FeatureCollection')</p><div class="notranslate">The allowed values include: and `FeatureCollection`</div></div> |

<h4 class="schema-object-example" id="AssetFeatureCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "store_id": "2354",
        "name": "Berkeley Street/Berkeley Square",
        "contact": {
          "phone": "02076295779",
          "website": "https://www.starbucks.com/store-locator/store/2354/berkeley-street-berkeley-square-27-berkeley-st-berkeley-square-london-eng-w-1-x-5-"
        },
        "address": {
          "lines": [
            "27 Berkeley St",
            "London, ENG W1X 5AD"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1X 5AD"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO"
        ],
        "types": [
          "Coffee shop"
        ],
        "last_updated": "2022-11-10T13:23:53.564829+00:00",
        "distance": 135.28682936,
        "open": {
          "open_now": true,
          "open_hours": [
            {
              "end": "18:00",
              "start": "06:30"
            }
          ],
          "week_day": 2,
          "current_slice": {
            "end": "18:00",
            "start": "06:30"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "17:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "17:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "timezone": "Europe/London"
        },
        "opening_hours": {
          "usual": {
            "1": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "06:30"
              }
            ],
            "6": [
              {
                "end": "17:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "17:00",
                "start": "08:00"
              }
            ]
          },
          "special": {},
          "timezone": "Europe/London"
        }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.14408,
          51.5088
        ]
      }
    }
  ],
  "pagination": {
    "page": 1,
    "pageCount": 1
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetFeatureCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetFeatureCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetfeaturecollectionresponse] -->
