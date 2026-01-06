<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesnearbycollectionresponse] -->
<h3 class="schema-object" id="LocalitiesNearbyCollectionResponse">LocalitiesNearbyCollectionResponse</h3>

Collection of nearby points of interest.

| Field                                                                                                                           | Required | Type                                                                                          | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesNearbyCollectionResponse-pagination" class="add-link schema-object-property-key"><code>pagination</code></h4> | optional | object                                                                                        | <div class="nonref-property-description"><p>Helps to navigate through paginated results.</p></div>                                                                                      |
| <h4 id="LocalitiesNearbyCollectionResponse-results" class="add-link schema-object-property-key"><code>results</code></h4>       | optional | Array&lt;[LocalitiesNearbyResponse](#LocalitiesNearbyResponse "LocalitiesNearbyResponse")&gt; | <div class="ref-property-description"><p>The array of nearby points of interest.</p><p>See <a href="#LocalitiesNearbyResponse">LocalitiesNearbyResponse</a> for more information.</div> |

<h4 class="schema-object-example" id="LocalitiesNearbyCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5mYXN0X2Zvb2Q6ZTc2ZDA1YzBiM2M0M2NmNmVkNTJjNGQyZDFiZDE3Nzc0OTZkNjlmOA==",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.fast_food"
      ],
      "categories": [
        "business.food_and_drinks.fast_food"
      ],
      "name": "Pret A Manger",
      "formatted_address": "Broadway, New York",
      "geometry": {
        "location": {
          "lat": 40.715905992166256,
          "lng": -74.00508673226767
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Broadway",
          "short_name": "Broadway"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5mYXN0X2Zvb2Q6MzBlMGYxMzVhNGUzZDQ4MzRiMmNlNDMzMWJiYjZkOTY0MWJhN2E0Zg==",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.fast_food"
      ],
      "categories": [
        "business.food_and_drinks.fast_food"
      ],
      "name": "Dunkin'",
      "formatted_address": "Broadway, New York",
      "geometry": {
        "location": {
          "lat": 40.71602115951586,
          "lng": -74.00494482664695
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Broadway",
          "short_name": "Broadway"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5yZXN0YXVyYW50OmJlMWNkMTE2ZDQwM2E0Y2YwNGQ5NWQ2OTlmZWRmM2FhZTExNGU3ZWY=",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.restaurant"
      ],
      "categories": [
        "business.food_and_drinks.restaurant"
      ],
      "name": "Chambers",
      "formatted_address": "Chambers Street, New York",
      "geometry": {
        "location": {
          "lat": 40.71461844801976,
          "lng": -74.00754036678366
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Chambers Street",
          "short_name": "Chambers Street"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLnNob3AuZ3JvY2VyeTo1YTczMjYxOTQyYjVlZmUwOGEzZjQ1NGZmMTMwMmJjNjA4ODE3NmRk",
      "types": [
        "point_of_interest",
        "business.shop.grocery"
      ],
      "categories": [
        "business.shop.grocery"
      ],
      "name": "City Hall Oasis",
      "geometry": {
        "location": {
          "lat": 40.71283012706819,
          "lng": -74.00727837935057
        },
        "viewport": {
          "northeast": {
            "lat": 40.71286059528623,
            "lng": -74.00724213866874
          },
          "southwest": {
            "lat": 40.71279957503111,
            "lng": -74.00731464213119
          }
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZpbmFuY2UuYmFuazpiOGY5MDE4Nzc2ZDZjNmEwZTljOGM4YWM0OTAxZWZlNzNmODZkM2M3",
      "types": [
        "point_of_interest",
        "business.finance.bank"
      ],
      "categories": [
        "business.finance.bank"
      ],
      "name": "Citibank",
      "formatted_address": "Broadway, New York",
      "geometry": {
        "location": {
          "lat": 40.7130414767567,
          "lng": -74.0074818610995
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Broadway",
          "short_name": "Broadway"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5yZXN0YXVyYW50OmQzMTMzZTJkODdiOGJjMGE3ZjI2YTdiMWVjYTZlZmI1MjQyYWE3MTE=",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.restaurant"
      ],
      "categories": [
        "business.food_and_drinks.restaurant"
      ],
      "name": "Saffron",
      "geometry": {
        "location": {
          "lat": 40.71467049963849,
          "lng": -74.00767187884445
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5yZXN0YXVyYW50OmQ1NjMyN2RiM2EyNWJlYmIwNjJjZjNlYWYwMDE3ZDIyYzEyNWNlMjY=",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.restaurant"
      ],
      "categories": [
        "business.food_and_drinks.restaurant"
      ],
      "name": "Gran Morsi",
      "geometry": {
        "location": {
          "lat": 40.71432885326513,
          "lng": -74.00778746528921
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5iYXI6MDE5ZGUzNTdiZDkyNzAyZDM4ZDUyOWQ0YmJiZjBmODQ5YWEzZmY1NA==",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.bar"
      ],
      "categories": [
        "business.food_and_drinks.bar"
      ],
      "name": "Bon Courage",
      "formatted_address": "Reade Street, New York",
      "geometry": {
        "location": {
          "lat": 40.71541472882126,
          "lng": -74.00719193106873
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Reade Street",
          "short_name": "Reade Street"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLmZvb2RfYW5kX2RyaW5rcy5mYXN0X2Zvb2Q6OGIyNDY5MDM4M2JhYzE1NmY4OGRiMGQzYmIyYzNjMTVmOTk0NDQwZQ==",
      "types": [
        "point_of_interest",
        "business.food_and_drinks.fast_food"
      ],
      "categories": [
        "business.food_and_drinks.fast_food"
      ],
      "name": "Burger King",
      "formatted_address": "Broadway, New York",
      "geometry": {
        "location": {
          "lat": 40.71619516782573,
          "lng": -74.00480635760651
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Broadway",
          "short_name": "Broadway"
        }
      ]
    },
    {
      "public_id": "cG9pOnVzOmJ1c2luZXNzLnRoZWF0cmU6MTU1Yjk5YmEwY2FiYzIzZjYxYWYyYTViYzI0ZDViYTVlNmVmZTAwNA==",
      "types": [
        "point_of_interest",
        "business.theatre"
      ],
      "categories": [
        "business.theatre"
      ],
      "name": "The Flea",
      "formatted_address": "Thomas Street, New York",
      "geometry": {
        "location": {
          "lat": 40.71609349534023,
          "lng": -74.00589281989586
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0",
            "division_level_0"
          ],
          "long_name": "United States",
          "short_name": "US"
        },
        {
          "types": [
            "locality"
          ],
          "long_name": "New York",
          "short_name": "New York"
        },
        {
          "types": [
            "route"
          ],
          "long_name": "Thomas Street",
          "short_name": "Thomas Street"
        }
      ]
    }
  ],
  "pagination": {
    "previous_page": 2,
    "next_page": 4
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesNearbyCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesNearbyCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesnearbycollectionresponse] -->
