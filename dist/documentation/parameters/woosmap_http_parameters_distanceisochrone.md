<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_distanceisochrone] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="origin">origin</h3>

    The starting point. It should be supplied in the form of latitude/longitude coordinates. Ensure that no space exists between the latitude and longitude values.

-   <h3 class="parameter-name" id="value">value</h3>

    The value to use for isochrone contour. You can specify time in minutes or distance in kilometers (cf. method parameter). The maximum value that can be specified is 120 (120 minutes : 2 hours or 120 km).

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="avoid">avoid</h3>

    The list of features that you want to avoid. Valid values are `tolls`, `highways`, `ferries` or polygons coordinates whose vertex latlng are separated by a semicolon. To add multiple polygons, separate them with the `|` character.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, indicating in which language the results should be returned, if possible. If language is not supplied, the Distance API service will use the navigator language or “en”.

-   <h3 class="parameter-name" id="method">method</h3>

    Specifies the method to compute the route between the start point and the end point:

    -   `time`: fastest route (default) - `distance`: shortest route

-   <h3 class="parameter-name" id="mode">mode</h3>

    Specifies the mode of transport to use when calculating distance

-   <h3 class="parameter-name" id="units">units</h3>

    Specifies the unit system parameter to use when expressing distance as text. Two different units supported:

    -   `metric` (default) returns distances in kilometers and meters
    -   `imperial` returns distances in miles and feet


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-distanceisochrone" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-distanceisochrone" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /distance/isochrone/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_distanceisochrone] -->