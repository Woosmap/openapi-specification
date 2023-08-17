<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_assetscollectionrequest] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_AssetsCollectionRequest">AssetsCollectionRequest</h3>

A Collection of Woosmap Assets as expected for Data Management Data API.

| Field                                                                                                        | Required     | Type                                                                                       | Description                                                                                                                                                                  |
| :----------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetsCollectionRequest-stores" class="add-link schema-object-property-key"><code>stores</code></h4> | **required** | Array&lt;[AssetRequest](<#Woosmap Platform API Reference_AssetRequest> "AssetRequest")&gt; | <div class="ref-property-description"><p>The Assets collection</p><p>See <a href="#Woosmap Platform API Reference_AssetRequest">AssetRequest</a> for more information.</div> |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_AssetsCollectionRequest-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "stores": [
    {
      "types": [
        "drive",
        "click_and_collect"
      ],
      "tags": [
        "wifi",
        "covered_parking"
      ],
      "location": {
        "lat": 38.719,
        "lng": -77.1067
      },
      "storeId": "STORE_ID_123456",
      "name": "My Cool Store",
      "address": {
        "lines": [
          "Building Centre",
          "26 Store Street"
        ],
        "countryCode": "UK",
        "city": "London",
        "zipcode": "WC1E 7BT"
      },
      "contact": {
        "website": "https://www.woosmap.com",
        "phone": "+44 20 7693 4000",
        "email": "contact@woosmap.com"
      },
      "userProperties": {
        "some_user_properties": "associated user value"
      },
      "openingHours": {
        "timezone": "Europe/London",
        "usual": {
          "1": [],
          "default": [
            {
              "start": "08:30",
              "end": "22:00"
            }
          ]
        },
        "special": {
          "2015-02-07": [
            {
              "start": "08:00",
              "end": "23:00"
            }
          ]
        }
      }
    },
    {
      "types": [
        "drive"
      ],
      "tags": [
        "covered_parking"
      ],
      "location": {
        "lat": 38.5239,
        "lng": -77.0157
      },
      "storeId": "STORE_ID_45678",
      "name": "My Cool Store 2",
      "address": {
        "lines": [
          "1805-1899",
          "Orchard St"
        ],
        "countryCode": "US",
        "city": "Alexandria",
        "zipcode": "22309"
      },
      "contact": {
        "website": "https://www.woosmap.com",
        "phone": "+44 20 7693 4000",
        "email": "contact@woosmap.com"
      },
      "userProperties": {
        "some_user_properties": "associated user value"
      },
      "openingHours": {
        "timezone": "America/New_York",
        "usual": {
          "1": [],
          "default": [
            {
              "start": "08:30",
              "end": "22:00"
            }
          ]
        }
      }
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetscollectionrequest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_AssetsCollectionRequest.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetscollectionrequest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_AssetsCollectionRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_assetscollectionrequest] -->
