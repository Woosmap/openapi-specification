<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiessearch] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="components">components</h3>

    A grouping of places to which you would like to restrict your results. Countries must be passed as an ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character (`|`) as a separator. For example: `components=country:gb|country:fr` would restrict your results to city names or postal codes within the United Kingdom, France.

-   <h3 class="parameter-name" id="input">input</h3>

    The text string on which to search, for example: "london" or "123 Cross Road". The Woosmap Localities API will return predictions matches based on this string and order the results based on their perceived relevance.

-   <h3 class="parameter-name" id="location">location</h3>

    This parameter is used to add a geographical bias to the query. The location defines the point around which to retrieve results in priority. It must be specified in the `latitude,longitude` string format.

-   <h3 class="parameter-name" id="types">types</h3>

    The types of suggestion to return. Multiple types can be passed using the pipe character (`|`) as a separator.

    -   `city`: includes city localities
    -   `town`: includes town localities
    -   `village`: includes village localities
    -   `hamlet`: includes hamlet localities
    -   `borough`: includes borough localities
    -   `suburb`: includes suburb localities
    -   `quarter`: includes quarter localities
    -   `neighbourhood`: includes neighbourhood localities
    -   `locality`: includes locality names (from city to village) and suburbs
    -   `postal_code`: publicly-used postal codes around the world
    -   `address`: addresses
    -   `admin_level`: most commonly used administrative areas
    -   `country`: countries as whole point of interest
    -   `point_of_interest`: includes points of interest

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="excluded_types">excluded_types</h3>

    The types of suggestion to exclude. Multiple types can be passed using the pipe character (`|`) as a separator.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 639-2 Alpha-2 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, first `Accept-Language` of the browser will be used.  If neither the provided `language` or the `Accept-Language` are known, the Localities service uses the international default language (English).  No `language` is necessary for a postal_code request. According to requested language, only parts of the address components might be translated.

-   <h3 class="parameter-name" id="radius">radius</h3>

    This parameter may be used in addition to the `location` parameter to define the distance in meters within which the API will return results in priority. Results outside of the defined area may still be displayed. Default radius if this parameter is not set is 100 000.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiessearch" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiessearch" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/search" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiessearch] -->