<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_timezoneresponse] -->
<h3 class="schema-object" id="TimezoneResponse">TimezoneResponse</h3>

Timezone information, name, raw offset to UTC and dst offset.

| Field                                                                                                               | Required     | Type    | Description                                                                                                                                                                                                                                    |
| :------------------------------------------------------------------------------------------------------------------ | ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TimezoneResponse-dst_offset" class="add-link schema-object-property-key"><code>dst_offset</code></h4>       | **required** | integer | <div class="nonref-property-description"><p>The daylight saving time offset in seconds.</p></div>                                                                                                                                              |
| <h4 id="TimezoneResponse-raw_offset" class="add-link schema-object-property-key"><code>raw_offset</code></h4>       | **required** | integer | <div class="nonref-property-description"><p>offset from utc in seconds.</p></div>                                                                                                                                                              |
| <h4 id="TimezoneResponse-timezone" class="add-link schema-object-property-key"><code>timezone</code></h4>           | **required** | string  | <div class="nonref-property-description"><p>The time zone identifier eg. 'Europe/Paris'. see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</a></p></div> |
| <h4 id="TimezoneResponse-timezone_name" class="add-link schema-object-property-key"><code>timezone_name</code></h4> | **required** | string  | <div class="nonref-property-description"><p>The timezone name eg. <code>PDT</code></p></div>                                                                                                                                                   |

<h4 class="schema-object-example" id="TimezoneResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "timezone": "Europe/Paris",
  "timezone_name": "CET",
  "raw_offset": 3600,
  "dst_offset": 0
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-timezoneresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TimezoneResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-timezoneresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TimezoneResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_timezoneresponse] -->
