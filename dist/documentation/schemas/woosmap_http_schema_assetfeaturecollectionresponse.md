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
          "XO",
          "UE"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 135.28682936,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "06:30"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "06:30",
            "day": "2022-04-05"
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
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2671",
        "name": "Berkeley Street",
        "contact": {
          "phone": "02076294911",
          "website": "https://www.starbucks.com/store-locator/store/2671/berkeley-street-52-berkeley-st-london-eng-w-1-j-8-et-gb"
        },
        "address": {
          "lines": [
            "52 Berkeley St.",
            "London, ENG W1J 8ET"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1J 8ET"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "WC",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 334.31148224,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "06:30"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "06:30",
            "day": "2022-04-05"
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
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
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
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ]
          },
          "timezone": "Europe/London"
        }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1424,
          51.50735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2888",
        "name": "Vigo Street",
        "contact": {
          "phone": "02077347632",
          "website": "https://www.starbucks.com/store-locator/store/2888/vigo-street-6-a-vigo-street-london-eng-w-1-s-3-hf-gb"
        },
        "address": {
          "lines": [
            "6A Vigo Street",
            "London",
            "London, ENG W1S 3HF"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1S 3HF"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 431.58415682,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.13912,
          51.5103
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "3047",
        "name": "West One Centre",
        "contact": {
          "phone": "020 76295404",
          "website": "https://www.starbucks.com/store-locator/store/3047/west-one-centre-381-oxford-street-west-one-centre-london-eng-w-1-c"
        },
        "address": {
          "lines": [
            "381 Oxford Street",
            "Unit G13",
            "London, ENG W1C 2JS"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1C 2JS"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "XO"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 541.85737556,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "08:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "08:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
                "start": "10:00"
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
                "start": "08:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.149374,
          51.513905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2606",
        "name": "Princes Street W1",
        "contact": {
          "phone": "02074958370",
          "website": "https://www.starbucks.com/store-locator/store/2606/princes-street-w-1-22-23-princes-st-london-eng-w-1-b-2-ly-gb"
        },
        "address": {
          "lines": [
            "22-23 Princes St",
            "London, ENG W1B 2LY"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1B 2LY"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "WC",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 544.58185978,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.142534,
          51.514346
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "91351",
        "name": "Harewood Place",
        "contact": {
          "phone": "02074953936",
          "website": "https://www.starbucks.com/store-locator/store/91351/harewood-place-13-b-hanover-square-london-eng-w-1-s-1-hn-gb"
        },
        "address": {
          "lines": [
            "13b Hanover Square",
            "London, ENG W1S 1HN"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1S 1HN"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "RW",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 554.73026581,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:30"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:30",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:30"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.14402,
          51.514684
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2353",
        "name": "Carnaby Street",
        "contact": {
          "phone": "02074340778",
          "website": "https://www.starbucks.com/store-locator/store/2353/carnaby-street-34-great-marlborough-st-london-eng-w-1-f-7-jd-gb"
        },
        "address": {
          "lines": [
            "34 Great Marlborough St",
            "(Carnaby Street)",
            "London, ENG W1F 7JD"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1F 7JD"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 632.17523247,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:30"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:30",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:30"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.13925,
          51.51402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2626",
        "name": "James Street",
        "contact": {
          "phone": "02074956680",
          "website": "https://www.starbucks.com/store-locator/store/2626/james-street-14-james-street-london-eng-w-1-u-1-ef-gb"
        },
        "address": {
          "lines": [
            "14 James Street",
            "London, ENG W1U 1EF"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1U 1EF"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 649.62722685,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "08:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "08:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "08:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.15029,
          51.51469
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2379",
        "name": "Cavendish Square",
        "contact": {
          "phone": "02076290191",
          "website": "https://www.starbucks.com/store-locator/store/2379/cavendish-square-33-cavendish-square-london-eng-w-1-g-0-pw-gb"
        },
        "address": {
          "lines": [
            "33 Cavendish Square",
            "Unit 1",
            "London, ENG W1G 0PW"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1G 0PW"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 714.77455167,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
                "start": "09:00"
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
                "start": "07:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
                "start": "09:00"
              }
            ]
          },
          "timezone": "Europe/London"
        }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.14389,
          51.516126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2779",
        "name": "Langham Place W1",
        "contact": {
          "phone": "02075806199",
          "website": "https://www.starbucks.com/store-locator/store/2779/langham-place-w-1-1-2-langham-place-london-eng-w-1-b-3-de-gb"
        },
        "address": {
          "lines": [
            "1 - 2  Langham Place",
            "London, ENG W1B 3DE"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1B 3DE"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 877.89870518,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.142683,
          51.517483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2714",
        "name": "Wardour Street/Brewer Street",
        "contact": {
          "phone": "02072874834",
          "website": "https://www.starbucks.com/store-locator/store/2714/wardour-street-brewer-street-60-66-wardour-street-london-eng-w-1-f-0-ta-gb"
        },
        "address": {
          "lines": [
            "60 - 66 Wardour Street",
            "Ground Floor",
            "London, ENG W1F 0TA"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1F 0TA"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "WC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 893.47601826,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:30"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:30",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:30"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:30"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.133316,
          51.512726
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "store_id": "2364",
        "name": "Wardour Street/Hollen Street",
        "contact": {
          "phone": "02072871956",
          "website": "https://www.starbucks.com/store-locator/store/2364/wardour-street-hollen-street-170-wardour-street-london-eng-w-1-v-4-la-gb"
        },
        "address": {
          "lines": [
            "170 Wardour Street",
            "London, ENG W1V 4LA"
          ],
          "country_code": "GB",
          "city": "London",
          "zipcode": "W1V 4LA"
        },
        "user_properties": {
          "take_away": "available"
        },
        "tags": [
          "WA",
          "WF",
          "CD",
          "DR",
          "XO",
          "NB",
          "LU",
          "BA",
          "BC"
        ],
        "types": [
          "Coffee shop"
        ],
        "distance": 925.6334785,
        "open": {
          "open_now": false,
          "open_hours": [
            {
              "end": "18:00",
              "start": "07:00"
            }
          ],
          "week_day": 1,
          "next_opening": {
            "end": "18:00",
            "start": "07:00",
            "day": "2022-04-05"
          }
        },
        "weekly_opening": {
          "1": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "2": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "3": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "4": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "5": {
            "hours": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "isSpecial": false
          },
          "6": {
            "hours": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "isSpecial": false
          },
          "7": {
            "hours": [
              {
                "end": "18:00",
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
                "start": "07:00"
              }
            ],
            "2": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "3": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "4": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "5": [
              {
                "end": "18:00",
                "start": "07:00"
              }
            ],
            "6": [
              {
                "end": "18:00",
                "start": "08:00"
              }
            ],
            "7": [
              {
                "end": "18:00",
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
          -0.1353,
          51.51528
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
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetFeatureCollectionResponse.yml" title="Edit on GitHub">??? Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetFeatureCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetfeaturecollectionresponse] -->
