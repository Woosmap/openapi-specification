<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_external-api-wrapper_what3words_addressresult] -->
<h3 class="schema-object" id="External-api-wrapper_what3words_AddressResult">AddressResult</h3>

| Field                                                                                                                      | Required     | Type                                                                                                     | Description                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AddressResult-address_components" class="add-link schema-object-property-key"><code>address_components</code></h4> | **required** | Array&lt;[AddressComponents](#External-api-wrapper_what3words_AddressComponents "AddressComponents")&gt; | <div class="ref-property-description"><p>Components</p><p>See <a href="#External-api-wrapper_what3words_AddressComponents">AddressComponents</a> for more information.</div> |
| <h4 id="AddressResult-formatted_address" class="add-link schema-object-property-key"><code>formatted_address</code></h4>   | **required** | string                                                                                                   | <div class="nonref-property-description"><p>Address</p></div>                                                                                                                |
| <h4 id="AddressResult-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>                     | **required** |                                                                                                          | <div class="nonref-property-description"><p>Geometry</p></div>                                                                                                               |
| <h4 id="AddressResult-types" class="add-link schema-object-property-key"><code>types</code></h4>                           | **required** | Array&lt;string&gt;                                                                                      | <div class="nonref-property-description"><p>Types</p></div>                                                                                                                  |
| <h4 id="AddressResult-status" class="add-link schema-object-property-key"><code>status</code></h4>                         | optional     | string                                                                                                   | <div class="nonref-property-description"><p>Address Status</p><div class="notranslate">The allowed values include: and `not_yet_built`</div></div>                           |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-addressresult" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/External-api-wrapper_what3words_AddressResult.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-addressresult" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - External-api-wrapper_what3words_AddressResult" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_external-api-wrapper_what3words_addressresult] -->