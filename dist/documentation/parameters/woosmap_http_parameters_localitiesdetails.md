<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiesdetails] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="public_id">public_id</h3>

    A textual identifier that uniquely identifies a locality, returned from a [Localities Autocomplete](https://developers.woosmap.com/products/localities/autocomplete/).

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name deprecated-item hide-from-toc" id="addresses_per_page">addresses_per_page</h3>

    <aside class="deprecated"><code>addresses_per_page</code> is deprecated.</aside>

    In a few cases, a postal code details may contain addresses (UK postal codes). The address list is paginated. In that case, you can navigate in the address list thanks to the `addresses_per_page` and `page` parameters. Notice: as all the addresses are now automatically returned in the response, the `addresses_per_page` parameter is deprecated and has been turned off on December 31, 2021.

-   <h3 class="parameter-name" id="cc_format">cc_format</h3>

    To specify the format for the short [country code](https://en.wikipedia.org/wiki/ISO\_3166-1) expected to be returned in the address_components field (default is `alpha3`).

-   <h3 class="parameter-name" id="fields">fields</h3>

    If set, it will limit the content of responses to the specified fields. This parameter can be any combination of `geometry`, `address_components` or `shape` (defaults to `geometry|address_components`).

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 639-2 Alpha-2 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, first `Accept-Language` of the browser will be used.  If neither the provided `language` or the `Accept-Language` are known, the Localities service uses the international default language (English).  No `language` is necessary for a postal_code request. According to requested language, only parts of the address components might be translated.

-   <h3 class="parameter-name deprecated-item hide-from-toc" id="page">page</h3>

    <aside class="deprecated"><code>page</code> is deprecated.</aside>

    In a few cases, a postal code details may contain addresses (UK postal codes). The address list is paginated. In that case, you can navigate in the address list thanks to the `addresses_per_page` and `page` parameters. Notice: as all the addresses are now automatically returned in the response, the `page` parameter is deprecated and has been turned off on December 31, 2021.

-   <h3 class="parameter-name" id="session_id">session_id</h3>

    A unique identifier used to **optimize the autocomplete session** for the end user.  This ID links all subsequent autocomplete queries and the final details query.  It **must** be regenerated after the details query, which terminates the current session.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiesdetails" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiesdetails" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/details" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiesdetails] -->