<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetweeklyopeninghoursperiod] -->
<h3 class="schema-object" id="AssetWeeklyOpeningHoursPeriod">AssetWeeklyOpeningHoursPeriod</h3>

The opening Hours for Monday

| Field                                                                                                                    | Required | Type                                                                                         | Description                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetWeeklyOpeningHoursPeriod-hours" class="add-link schema-object-property-key"><code>hours</code></h4>         | optional | Array\&lt;[AssetOpeningHoursPeriod](#AssetOpeningHoursPeriod "AssetOpeningHoursPeriod")\&gt; | See [AssetOpeningHoursPeriod](#AssetOpeningHoursPeriod "AssetOpeningHoursPeriod") for more information.           |
| <h4 id="AssetWeeklyOpeningHoursPeriod-isSpecial" class="add-link schema-object-property-key"><code>isSpecial</code></h4> | optional | boolean                                                                                      | <div class="nonref-property-description"><p>Define if the hours comes from a special opening hours day.</p></div> |

<h4 class="schema-object-example" id="AssetWeeklyOpeningHoursPeriod-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "hours": [
    {
      "start": "06:30",
      "end": "18:00"
    }
  ],
  "isSpecial": false
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetweeklyopeninghoursperiod" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetWeeklyOpeningHoursPeriod.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetweeklyopeninghoursperiod" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetWeeklyOpeningHoursPeriod" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetweeklyopeninghoursperiod] -->
