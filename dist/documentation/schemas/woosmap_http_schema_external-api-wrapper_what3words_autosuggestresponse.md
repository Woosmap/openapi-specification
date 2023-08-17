<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_external-api-wrapper_what3words_autosuggestresponse] -->
<h3 class="schema-object" id="External-api-wrapper_what3words_AutoSuggestResponse">AutoSuggestResponse</h3>

| Field                                                                                                              | Required     | Type                                                                                               | Description                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <h4 id="AutoSuggestResponse-suggestions" class="add-link schema-object-property-key"><code>suggestions</code></h4> | **required** | Array&lt;[AutoSuggestions](#External-api-wrapper_what3words_AutoSuggestions "AutoSuggestions")&gt; | See [AutoSuggestions](#External-api-wrapper_what3words_AutoSuggestions "AutoSuggestions") for more information. |

<h4 class="schema-object-example" id="External-api-wrapper_what3words_AutoSuggestResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "suggestions": [
    {
      "country": "FR",
      "nearestPlace": "Paris",
      "words": "couches.spotted.alas",
      "distanceToFocusKm": 4,
      "rank": 1,
      "language": "en"
    },
    {
      "country": "FR",
      "nearestPlace": "Paris",
      "words": "couches.spotted.atom",
      "distanceToFocusKm": 8,
      "rank": 2,
      "language": "en"
    },
    {
      "country": "FR",
      "nearestPlace": "Pontcarré, Seine-et-Marne",
      "words": "couch.spotted.boat",
      "distanceToFocusKm": 30,
      "rank": 3,
      "language": "en"
    },
    {
      "country": "FR",
      "nearestPlace": "Triel-sur-Seine, Yvelines",
      "words": "vouch.spotted.dare",
      "distanceToFocusKm": 27,
      "rank": 4,
      "language": "en"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-autosuggestresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/External-api-wrapper_what3words_AutoSuggestResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-autosuggestresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - External-api-wrapper_what3words_AutoSuggestResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_external-api-wrapper_what3words_autosuggestresponse] -->