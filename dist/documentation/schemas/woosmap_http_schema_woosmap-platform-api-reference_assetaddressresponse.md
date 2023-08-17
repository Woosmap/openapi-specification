<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_assetaddressresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_AssetAddressResponse">AssetAddressResponse</h3>

An object containing the separate components applicable to this address.

| Field                                                                                                                 | Required | Type                                                                                         | Description                                                                                                                                                                                                                     |
| :-------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetAddressResponse-city" class="add-link schema-object-property-key"><code>city</code></h4>                 | optional | string                                                                                       | <div class="nonref-property-description"><p>A City where belongs an Asset</p></div>                                                                                                                                             |
| <h4 id="AssetAddressResponse-country_code" class="add-link schema-object-property-key"><code>country_code</code></h4> | optional | string                                                                                       | <div class="nonref-property-description"><p>An ISO_3166-1 Country Code where the Asset is located (see <a href="https://en.wikipedia.org/wiki/ISO_3166-1">https://en.wikipedia.org/wiki/ISO_3166-1</a> for full list)</p></div> |
| <h4 id="AssetAddressResponse-lines" class="add-link schema-object-property-key"><code>lines</code></h4>               | optional | [AssetAddressLines](<#Woosmap Platform API Reference_AssetAddressLines> "AssetAddressLines") | See [AssetAddressLines](<#Woosmap Platform API Reference_AssetAddressLines> "AssetAddressLines") for more information.                                                                                                          |
| <h4 id="AssetAddressResponse-zipcode" class="add-link schema-object-property-key"><code>zipcode</code></h4>           | optional | string                                                                                       | <div class="nonref-property-description"><p>An Zipcode / Postal code of an Asset Address</p></div>                                                                                                                              |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_AssetAddressResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "lines": [
    "8 Southwark St"
  ],
  "country_code": "UK",
  "city": "London",
  "zipcode": "SE1 1TL"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetaddressresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_AssetAddressResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetaddressresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_AssetAddressResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_assetaddressresponse] -->