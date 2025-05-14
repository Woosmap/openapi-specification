<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetaddressrequest] -->
<h3 class="schema-object" id="AssetAddressRequest">AssetAddressRequest</h3>

An object containing the separate components applicable to this address.

| Field                                                                                                              | Required | Type                                                        | Description                                                                                                                                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetAddressRequest-city" class="add-link schema-object-property-key"><code>city</code></h4>               | optional | string                                                      | <div class="nonref-property-description"><p>A City where belongs an Asset</p></div>                                                                                                                                             |
| <h4 id="AssetAddressRequest-countryCode" class="add-link schema-object-property-key"><code>countryCode</code></h4> | optional | string,null                                                 | <div class="nonref-property-description"><p>An ISO_3166-1 Country Code where the Asset is located (see <a href="https://en.wikipedia.org/wiki/ISO_3166-1">https://en.wikipedia.org/wiki/ISO_3166-1</a> for full list)</p></div> |
| <h4 id="AssetAddressRequest-lines" class="add-link schema-object-property-key"><code>lines</code></h4>             | optional | [AssetAddressLines](#AssetAddressLines "AssetAddressLines") | See [AssetAddressLines](#AssetAddressLines "AssetAddressLines") for more information.                                                                                                                                           |
| <h4 id="AssetAddressRequest-zipcode" class="add-link schema-object-property-key"><code>zipcode</code></h4>         | optional | string                                                      | <div class="nonref-property-description"><p>An Zipcode / Postal code of an Asset Address</p></div>                                                                                                                              |

<h4 class="schema-object-example" id="AssetAddressRequest-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "lines": [
    "8 Southwark St"
  ],
  "countryCode": "UK",
  "city": "London",
  "zipcode": "WC1E 7BT"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetaddressrequest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetAddressRequest.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetaddressrequest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetAddressRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetaddressrequest] -->
