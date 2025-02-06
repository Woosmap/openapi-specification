<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiesgeocode] -->


<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="address">address</h3>

    The input string to geocode. Can represent an address, a street, a locality or a postal code. The `address` parameter must be URL encoded.

-   <h3 class="parameter-name" id="cc_format">cc_format</h3>

    To specify the format for the short [country code](https://en.wikipedia.org/wiki/ISO\_3166-1) expected to be returned in the address_components field. Default is the format used to specify `components` or `alpha2` if no components are specified.

-   <h3 class="parameter-name" id="components">components</h3>

    A grouping of places to which you would like to restrict your results. Components can and should be used when applicable to filter over countries and retrieve more accurate results. Countries must be passed as an ISO 3166-1 Alpha-2 or Alpha-3 compatible country code. For example: `components=country:fr` or `components=country:fra` would restrict your results to places within France and `components=country:fr-fr` returns locations only in Metropolitan France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character (`|`) as a separator. For example: `components=country:gb|country:fr|country:be|country:sp|country:it` would restrict your results to city names or postal codes within the United Kingdom, France, Belgium, Spain and Italy.

-   <h3 class="parameter-name" id="data">data</h3>

    Two values for this parameter: `standard` or `advanced`. By default, if the parameter is not defined, value is set as `standard`. The `advanced` value opens suggestions to worldwide postal codes in addition to postal codes for Western Europe. ***A dedicated option subject to specific billing on your license is needed to use this parameter. Please contact us if you are interested in using this parameter and you do not have subscribed the proper option yet.***

-   <h3 class="parameter-name" id="excluded_types">excluded_types</h3>

    The types of suggestion to exclude. Multiple types can be passed using the pipe character (`|`) as a separator.

-   <h3 class="parameter-name" id="fields">fields</h3>

    If set, it will limit the content of responses to the specified fields. This parameter can be any combination of `geometry`, `address_components` or `shape` (defaults to `geometry|address_components`).

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 639-2 Alpha-2 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, first `Accept-Language` of the browser will be used.  If neither the provided `language` or the `Accept-Language` are known, the Localities service uses the international default language (English).  No `language` is necessary for a postal_code request. According to requested language, only parts of the address components might be translated.

-   <h3 class="parameter-name" id="latlng">latlng</h3>

    The latlng parameter is used for reverse geocoding, it’s required if the `address` parameter is missing.

-   <h3 class="parameter-name" id="list_sub_buildings">list_sub_buildings</h3>

    When latlng parameter is used for reverse geocoding, setting `list_sub_building=true` allows to retrieve all addresses at the same location for a common street number or building. Results may contain an additional key "sub_buildings" with "public_id" and "description" values for every addresses at the same location sharing the same address components.

-   <h3 class="parameter-name" id="types">types</h3>

    Specify the types of geocoding responses to return by separating multiple types with a pipe character (|).  This parameter is ignored when used with the `latlng` parameter.  When executing a geocode request with the `address` parameter, use this to select the expected result type.

    -   `city`: includes city localities
    -   `town`: includes town localities
    -   `village`: includes village localities
    -   `hamlet`: includes hamlet localities
    -   `borough`: includes borough localities
    -   `suburb`: includes suburb localities
    -   `quarter`: includes quarter localities
    -   `neighbourhood`: includes neighbourhood localities
    -   `locality`: includes all previous locality names
    -   `postal_code`: publicly-used postal codes around the world
    -   `address`: addresses
    -   `admin_level`: most commonly used administrative areas
    -   `country`: countries as whole point of interest
    -   `airport`: includes all medium sized to international sized airports
    -   `train_station`: includes all train stations
    -   `metro_station`: includes all metro stations
    -   `shopping`: includes shopping malls (or "shopping centers") - *may include private retail brands*
    -   `museum`: includes museums
    -   `tourist_attraction`: includes tourist attractions like the Eiffel tower
    -   `amusement_park`: includes amusement parks like Disneyland Paris
    -   `art_gallery`: includes art galleries
    -   `zoo`: includes zoos


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiesgeocode" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiesgeocode" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/geocode" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiesgeocode] -->