<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_distancetolls] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="destination">destination</h3>

    The ending point for the route. It should be supplied in the form of latitude/longitude coordinates. Ensure that no space exists between the latitude and longitude values.

-   <h3 class="parameter-name" id="origin">origin</h3>

    The starting point. It should be supplied in the form of latitude/longitude coordinates. Ensure that no space exists between the latitude and longitude values.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="alternatives">alternatives</h3>

    Specifies if alternative routes should be returned. default is `false`. Depending on the calculated route, alternatives may not be provided.
    `alternatives` and `waypoints` can not be used at the same time.

-   <h3 class="parameter-name" id="arrival_time">arrival_time</h3>

    By using this parameter, Distance will calculate the duration with traffic Specifies the arrival date/time as a timestamp to base the calculation on (e.g. `1600799173` for the date:`22/09/2020 20:26:13`).
    Use either `arrival_time` or `departure_time`, not both.

-   <h3 class="parameter-name" id="departure_time">departure_time</h3>

    By using this parameter, Distance will calculate the duration with traffic Specifies the date/time at which to base the calculations on for traffic purposes. Valid values are a timestamp (e.g. `1600799173` for the date:`22/09/2020 20:26:13`) or `now`.
    Use either `arrival_time` or `departure_time`, not both.

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

-   <h3 class="parameter-name" id="waypoints">waypoints</h3>

    A list of points by which the route should pass (route response is divided into legs, one leg corresponding to a route between two waypoints). Waypoints should be separated by | character.
    Optionally, you may pass `optimize:true` as the first argument within the waypoints parameter. This way the provided route is optimized by rearranging the waypoints in a more efficient order based on distance or time according to the method parameter. The route start point and end point order is not changed, their position is considered fixed.
    `alternatives` and `waypoints` can not be used at the same time.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-distancetolls" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-distancetolls" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /distance/tolls/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_distancetolls] -->