<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetopenresponse] -->
<h3 class="schema-object" id="AssetOpenResponse">AssetOpenResponse</h3>

The Current opening status for an Asset

| Field                                                                                                                | Required | Type                                                                                         | Description                                                                                                                                                                 |
| :------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetOpenResponse-current_slice" class="add-link schema-object-property-key"><code>current_slice</code></h4> | optional | [AssetOpeningHoursPeriod](#AssetOpeningHoursPeriod "AssetOpeningHoursPeriod")                | See [AssetOpeningHoursPeriod](#AssetOpeningHoursPeriod "AssetOpeningHoursPeriod") for more information.                                                                     |
| <h4 id="AssetOpenResponse-next_opening" class="add-link schema-object-property-key"><code>next_opening</code></h4>   | optional | object                                                                                       | <div class="nonref-property-description"><p>the next opening hours period</p></div>                                                                                         |
| <h4 id="AssetOpenResponse-open_hours" class="add-link schema-object-property-key"><code>open_hours</code></h4>       | optional | Array\&lt;[AssetOpeningHoursPeriod](#AssetOpeningHoursPeriod "AssetOpeningHoursPeriod")\&gt; | <div class="ref-property-description"><p>the opening hours for the day</p><p>See <a href="#AssetOpeningHoursPeriod">AssetOpeningHoursPeriod</a> for more information.</div> |
| <h4 id="AssetOpenResponse-open_now" class="add-link schema-object-property-key"><code>open_now</code></h4>           | optional | boolean                                                                                      | <div class="nonref-property-description"><p>Boolean value indicating the status of the opening hours</p></div>                                                              |
| <h4 id="AssetOpenResponse-week_day" class="add-link schema-object-property-key"><code>week_day</code></h4>           | optional | integer                                                                                      | <div class="nonref-property-description"><p>the day of the week starting from 1 to 7</p></div>                                                                              |

<h4 class="schema-object-example" id="AssetOpenResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "open_now": true,
  "open_hours": [
    {
      "end": "20:00",
      "start": "05:00"
    }
  ],
  "week_day": 1,
  "current_slice": {
    "end": "20:00",
    "start": "05:00"
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetopenresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetOpenResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetopenresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetOpenResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetopenresponse] -->
