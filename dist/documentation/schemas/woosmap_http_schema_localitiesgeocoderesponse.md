<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesgeocoderesponse] -->
<h3 class="schema-object" id="LocalitiesGeocodeResponse">LocalitiesGeocodeResponse</h3>

Attributes describing a locality. Not all attributes will be available for all locality types.

| Field                                                                                                                                  | Required | Type                                                                                    | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesGeocodeResponse-address_components" class="add-link schema-object-property-key"><code>address_components</code></h4> | optional | [AddressComponents](#AddressComponents "AddressComponents")                             | See [AddressComponents](#AddressComponents "AddressComponents") for more information.                                                                                                   |
| <h4 id="LocalitiesGeocodeResponse-formatted_address" class="add-link schema-object-property-key"><code>formatted_address</code></h4>   | optional | [FormattedAddress](#FormattedAddress "FormattedAddress")                                | See [FormattedAddress](#FormattedAddress "FormattedAddress") for more information.                                                                                                      |
| <h4 id="LocalitiesGeocodeResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>                     | optional | [LocalitiesAddressGeometry](#LocalitiesAddressGeometry "LocalitiesAddressGeometry")     | See [LocalitiesAddressGeometry](#LocalitiesAddressGeometry "LocalitiesAddressGeometry") for more information.                                                                           |
| <h4 id="LocalitiesGeocodeResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>                         | optional | [LocalitiesStatus](#LocalitiesStatus "LocalitiesStatus")                                | See [LocalitiesStatus](#LocalitiesStatus "LocalitiesStatus") for more information.                                                                                                      |
| <h4 id="LocalitiesGeocodeResponse-types" class="add-link schema-object-property-key"><code>types</code></h4>                           | optional | Array&lt;[LocalitiesGeocodeTypes](#LocalitiesGeocodeTypes "LocalitiesGeocodeTypes")&gt; | <div class="ref-property-description"><p>An array containing the types of the result</p><p>See <a href="#LocalitiesGeocodeTypes">LocalitiesGeocodeTypes</a> for more information.</div> |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesgeocoderesponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesGeocodeResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesgeocoderesponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesGeocodeResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesgeocoderesponse] -->