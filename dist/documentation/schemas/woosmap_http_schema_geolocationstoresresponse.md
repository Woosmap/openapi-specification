<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_geolocationstoresresponse] -->
<h3 class="schema-object" id="GeolocationStoresResponse">GeolocationStoresResponse</h3>

JSON-formatted response defining a location, radius, and stores if accuracy of geocoded IP is 20km or less.

| Field                                                                                                                      | Required | Type                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="GeolocationStoresResponse-accuracy" class="add-link schema-object-property-key"><code>accuracy</code></h4>         | optional | number                                                                                             | <div class="nonref-property-description"><p>The accuracy of the estimated location, in meters. This represents the radius of a circle around the given <code>location</code> where the IP address is likely to be. If your Geolocation response shows a low value in the <code>accuracy</code> field (&#x3C;=50), the IP has strong chance to be correctly located.</p></div> |
| <h4 id="GeolocationStoresResponse-city" class="add-link schema-object-property-key"><code>city</code></h4>                 | optional | string                                                                                             | <div class="nonref-property-description"><p>City name when available</p></div>                                                                                                                                                                                                                                                                                                |
| <h4 id="GeolocationStoresResponse-continent" class="add-link schema-object-property-key"><code>continent</code></h4>       | optional | string                                                                                             | <div class="nonref-property-description"><p>Continent name</p></div>                                                                                                                                                                                                                                                                                                          |
| <h4 id="GeolocationStoresResponse-country_code" class="add-link schema-object-property-key"><code>country_code</code></h4> | optional | string,null                                                                                        | <div class="nonref-property-description"><p>ISO 3166-1 Alpha-2 compatible country code</p></div>                                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationStoresResponse-country_name" class="add-link schema-object-property-key"><code>country_name</code></h4> | optional | string                                                                                             | <div class="nonref-property-description"><p>Country name</p></div>                                                                                                                                                                                                                                                                                                            |
| <h4 id="GeolocationStoresResponse-latitude" class="add-link schema-object-property-key"><code>latitude</code></h4>         | optional | number                                                                                             | <div class="nonref-property-description"><p>Approximate latitude of the geographical area associated with the IP address</p></div>                                                                                                                                                                                                                                            |
| <h4 id="GeolocationStoresResponse-longitude" class="add-link schema-object-property-key"><code>longitude</code></h4>       | optional | number                                                                                             | <div class="nonref-property-description"><p>Approximate longitude of the geographical area associated with the IP address</p></div>                                                                                                                                                                                                                                           |
| <h4 id="GeolocationStoresResponse-postal_code" class="add-link schema-object-property-key"><code>postal_code</code></h4>   | optional | string                                                                                             | <div class="nonref-property-description"><p>A postal code close to the user's location, when available</p></div>                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationStoresResponse-region_state" class="add-link schema-object-property-key"><code>region_state</code></h4> | optional | string                                                                                             | <div class="nonref-property-description"><p>Region name when available</p></div>                                                                                                                                                                                                                                                                                              |
| <h4 id="GeolocationStoresResponse-stores" class="add-link schema-object-property-key"><code>stores</code></h4>             | optional | [AssetFeatureCollectionResponse](#AssetFeatureCollectionResponse "AssetFeatureCollectionResponse") | See [AssetFeatureCollectionResponse](#AssetFeatureCollectionResponse "AssetFeatureCollectionResponse") for more information.                                                                                                                                                                                                                                                  |
| <h4 id="GeolocationStoresResponse-timezone" class="add-link schema-object-property-key"><code>timezone</code></h4>         | optional | [Timezone](#Timezone "Timezone")                                                                   | See [Timezone](#Timezone "Timezone") for more information.                                                                                                                                                                                                                                                                                                                    |
| <h4 id="GeolocationStoresResponse-viewport" class="add-link schema-object-property-key"><code>viewport</code></h4>         | optional | [Bounds](#Bounds "Bounds")                                                                         | See [Bounds](#Bounds "Bounds") for more information.                                                                                                                                                                                                                                                                                                                          |

<h4 class="schema-object-example" id="GeolocationStoresResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "country_code": "US",
  "country_name": "United States",
  "continent": "North America",
  "latitude": 38.719,
  "longitude": -77.1067,
  "accuracy": 5,
  "viewport": {
    "northeast": {
      "lat": 38.763915764205976,
      "lng": -77.0491321464058
    },
    "southwest": {
      "lat": 38.674084235794034,
      "lng": -77.16426785359421
    }
  },
  "city": "Alexandria",
  "region_state": "Virginia",
  "postal_code": "22309",
  "timezone": "America/New_York",
  "stores": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "store_id": "STORE_ID_123456",
          "name": "My Cool Store",
          "contact": {
            "email": "contact@woosmap.com",
            "phone": "+44 20 7693 4000",
            "website": "https://www.woosmap.com"
          },
          "address": {
            "lines": [
              "Building Centre",
              "26 Store Street"
            ],
            "country_code": "UK",
            "city": "London",
            "zipcode": "WC1E 7BT"
          },
          "user_properties": {
            "some_user_properties": "associated user value"
          },
          "tags": [
            "wifi",
            "covered_parking"
          ],
          "types": [
            "drive",
            "click_and_collect"
          ],
          "last_updated": "2024-03-20T15:14:51.067524+00:00",
          "distance": 0,
          "open": {
            "open_now": true,
            "open_hours": [
              {
                "end": "22:00",
                "start": "08:30"
              }
            ],
            "week_day": 3,
            "current_slice": {
              "end": "22:00",
              "start": "08:30"
            }
          },
          "weekly_opening": {
            "1": {
              "hours": [],
              "isSpecial": false
            },
            "2": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "3": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "4": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "5": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "6": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "7": {
              "hours": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ],
              "isSpecial": false
            },
            "timezone": "Europe/London"
          },
          "opening_hours": {
            "usual": {
              "1": [],
              "default": [
                {
                  "end": "22:00",
                  "start": "08:30"
                }
              ]
            },
            "special": {
              "2015-02-07": [
                {
                  "end": "23:00",
                  "start": "08:00"
                }
              ]
            },
            "timezone": "Europe/London"
          }
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.1067,
            38.719
          ]
        }
      }
    ],
    "pagination": {
      "page": 1,
      "pageCount": 2
    }
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-geolocationstoresresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/GeolocationStoresResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-geolocationstoresresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - GeolocationStoresResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_geolocationstoresresponse] -->
