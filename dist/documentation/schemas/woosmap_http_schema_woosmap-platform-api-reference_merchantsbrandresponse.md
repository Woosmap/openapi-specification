<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_merchantsbrandresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_MerchantsBrandResponse">MerchantsBrandResponse</h3>

Attributes describing a Merchant Brand response

| Field                                                                                                             | Required | Type                                                                                                            | Description                                                                                                                                                                                                                                                |
| :---------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsBrandResponse-merchants" class="add-link schema-object-property-key"><code>merchants</code></h4> | optional | Array&lt;[MerchantsBrandClean](<#Woosmap Platform API Reference_MerchantsBrandClean> "MerchantsBrandClean")&gt; | <div class="ref-property-description"><p>The list of cleaned transactions (only one element is returned when using GET method)</p><p>See <a href="#Woosmap Platform API Reference_MerchantsBrandClean">MerchantsBrandClean</a> for more information.</div> |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_MerchantsBrandResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "merchants": [
    {
      "status": "OK",
      "clean_name": "Apple",
      "logo": "a0e920d9f5de2e17d7a9c38a65ca6943",
      "logo_url": "https://api.woosmap.com/merchants/logos/a0e920d9f5de2e17d7a9c38a65ca6943.png",
      "country": "",
      "dirty_name": "APPLE.COM%2FBILL"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-merchantsbrandresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_MerchantsBrandResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-merchantsbrandresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_MerchantsBrandResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_merchantsbrandresponse] -->