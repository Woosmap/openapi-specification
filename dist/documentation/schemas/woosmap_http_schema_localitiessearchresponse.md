<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiessearchresponse] -->
<h3 class="schema-object" id="LocalitiesSearchResponse">LocalitiesSearchResponse</h3>

Attributes describing a search result.

| Field                                                                                                                   | Required     | Type                                                                                          | Description                                                                                                                                                                                                                             |
| :---------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesSearchResponse-public_id" class="add-link schema-object-property-key"><code>public_id</code></h4>     | **required** | string                                                                                        | <div class="nonref-property-description"><p>Contains a unique ID for each suggestion. Please use this ID if you need to give us feedbacks on results. This ID is also required to perform Localities Details request.</p></div>         |
| <h4 id="LocalitiesSearchResponse-title" class="add-link schema-object-property-key"><code>title</code></h4>             | **required** | string                                                                                        | <div class="nonref-property-description"><p>Main string of the suggestion</p></div>                                                                                                                                                     |
| <h4 id="LocalitiesSearchResponse-types" class="add-link schema-object-property-key"><code>types</code></h4>             | **required** | Array&lt;[LocalitiesSearchTypes](#LocalitiesSearchTypes "LocalitiesSearchTypes")&gt;          | <div class="ref-property-description"><p>An array containing the types of the result.</p><p>See <a href="#LocalitiesSearchTypes">LocalitiesSearchTypes</a> for more information.</div>                                                  |
| <h4 id="LocalitiesSearchResponse-categories" class="add-link schema-object-property-key"><code>categories</code></h4>   | optional     | Array&lt;[LocalitiesNearbyCategory](#LocalitiesNearbyCategory "LocalitiesNearbyCategory")&gt; | <div class="ref-property-description"><p>An array containing the categories of the result if that result is a point of interest.</p><p>See <a href="#LocalitiesNearbyCategory">LocalitiesNearbyCategory</a> for more information.</div> |
| <h4 id="LocalitiesSearchResponse-description" class="add-link schema-object-property-key"><code>description</code></h4> | optional     | string                                                                                        | <div class="nonref-property-description"><p>Address hint associated with that suggestion. The description can vary depending on the type requested.</p></div>                                                                           |

<h4 class="schema-object-example" id="LocalitiesSearchResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "public_id": "cB15hd5Hv/cKrh3MSyIg6eoAAN4=",
  "types": [
    "point_of_interest"
  ],
  "title": "Royal Albert",
  "description": "New Cross Road, London, United Kingdom",
  "categories": [
    "business.food_and_drinks.pub"
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiessearchresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesSearchResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiessearchresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesSearchResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiessearchresponse] -->
