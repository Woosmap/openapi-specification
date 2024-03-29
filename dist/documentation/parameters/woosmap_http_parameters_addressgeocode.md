<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_addressgeocode] -->


<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="address">address</h3>

    The address of which to find the coordinates for. A partial address is less likely to return the proper coordinates than the complete address.

-   <h3 class="parameter-name" id="cc_format">cc_format</h3>

    To specify the format for the short [country code](https://en.wikipedia.org/wiki/ISO\_3166-1) expected to be returned in the address_components field (default is `alpha3`).

-   <h3 class="parameter-name" id="components">components</h3>

    To restrict your results to specific areas. Currently, you can use components to filter over countries. Countries must be passed as three characters string (ISO 3166-1 Alpha 3). Components should be passed as an array of different options which are separated by a `|`.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 639-1 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, the Localities service will use the default language of each country.

-   <h3 class="parameter-name" id="latlng">latlng</h3>

    Geographic coordinates. Should be pass in `lat`,`lng` format.

-   <h3 class="parameter-name" id="limit">limit</h3>

    Maximum number of results to be returned (value from 1 to 100, default values for geocode request \[20] and for reverse geocode request \[1])

-   <h3 class="parameter-name" id="location">location</h3>

    Bias for the results. Should be pass in `lat`,`lng` format.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-addressgeocode" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-addressgeocode" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /address/geocode/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_addressgeocode] -->