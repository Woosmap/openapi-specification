<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_merchantsplacerequest] -->
<h3 class="schema-object" id="MerchantsPlaceRequest">MerchantsPlaceRequest</h3>

Attributes describing a Merchant Place request

| Field                                                                                                            | Required     | Type                                                                           | Description                                                                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsPlaceRequest-merchants" class="add-link schema-object-property-key"><code>merchants</code></h4> | **required** | Array&lt;[MerchantsPlaceDirty](#MerchantsPlaceDirty "MerchantsPlaceDirty")&gt; | <div class="ref-property-description"><p>The list of dirty transactions to clean</p><p>See <a href="#MerchantsPlaceDirty">MerchantsPlaceDirty</a> for more information.</div> |

<h4 class="schema-object-example" id="MerchantsPlaceRequest-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB",
      "merchant_id": "234482729011"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT",
      "merchant_id": "*44532UY2T33219"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR",
      "merchant_id": "9651781125"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE",
      "merchant_id": "2070070200925"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES",
      "merchant_id": "34J21189"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-merchantsplacerequest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/MerchantsPlaceRequest.yml" title="Edit on GitHub">??? Edit</a>
<a data-label="openapi-github-woosmap-http-schema-merchantsplacerequest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - MerchantsPlaceRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_merchantsplacerequest] -->
