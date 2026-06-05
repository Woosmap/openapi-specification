<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_geojsongeometry] -->
<h3 class="schema-object" id="GeoJsonGeometry">GeoJsonGeometry</h3>

A GeoJSon Geometry representing the shape of the area, as specified in [RFC7946](https://datatracker.ietf.org/doc/html/rfc7946).
To display on the map, simply wrap this object in a feature:

```json
{
  "type": "Feature",
  "geometry": this_geojson_geometry
}
```

| Field                                                                                                          | Required | Type                                                           | Description                                                                                                                                                     |
| :------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="GeoJsonGeometry-coordinates" class="add-link schema-object-property-key"><code>coordinates</code></h4> | optional | Array\&lt;[GeoJsonCoords](#GeoJsonCoords "GeoJsonCoords")\&gt; | See [GeoJsonCoords](#GeoJsonCoords "GeoJsonCoords") for more information.                                                                                       |
| <h4 id="GeoJsonGeometry-type" class="add-link schema-object-property-key"><code>type</code></h4>               | optional | string                                                         | <div class="nonref-property-description"><p>the geometry type</p><div class="notranslate">The allowed values include: `Polygon`, and `MultiPoligon`</div></div> |

<h4 class="schema-object-example" id="GeoJsonGeometry-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "type": "Polygon",
  "coordinates": [
    [
      [
        2.06984,
        48.77919
      ],
      [
        2.07984,
        48.77919
      ],
      [
        2.07984,
        48.78919
      ],
      [
        2.06984,
        48.78919
      ],
      [
        2.06984,
        48.77919
      ]
    ]
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-geojsongeometry" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/GeoJsonGeometry.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-geojsongeometry" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - GeoJsonGeometry" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_geojsongeometry] -->
