<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_storessearch] -->


<h2 id="optional-parameters">Optional parameters</h2>

- <h3 class="parameter-name" id="encoded_polyline">encoded_polyline</h3>

  Find assets nearby an [encoded polyline](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) and inside a defined radius.

- <h3 class="parameter-name" id="lat">lat</h3>

  Latitude bias for the results. Should be pass with `lng`.

- <h3 class="parameter-name" id="lng">lng</h3>

  Longitude bias for the results. Should be pass with `lat`.

- <h3 class="parameter-name" id="page">page</h3>

  Page number when accessing paginated assets feature collection

- <h3 class="parameter-name" id="query">query</h3>

  Search query combining one or more search clauses. Each search clause is made up of three parts structured as `field` `:` `operator` `value`. , e.g. `name:="My cool store"`

  ### Vocabulary

  - **Field**: attribute of the Store that is searched, e.g. the attribute `name` of the store.

  - **Operator**: test that is performed on the data to provide a match, e.g. `=`.
    Each field has a default operator. If none operator follow the `:`, the default one is used.

  - **Value**: the content of the attribute that is tested, e.g. the name of the store `"My cool store"`.

  Combine clauses with the conjunctions `AND` or `OR`, and negate the query with `NOT`.

  ### Fields

  - `type`: An element is contained within `type` collection. e.g. `type:"myType"`

  - `tag`: An element is contained within `tag` collection. e.g. `tag:"myTag"`

  - `city`: text matching: the value match the `city` field. e.g. `city:="Paris"`

  - `country`: text matching: the value match the `countryCode` field. e.g. `country:="FR"`

  - `name`: text matching: the value match the `name` field. e.g. `name:="myName"`

  - `idstore`: text matching: the value match the `idstore` field.  e.g. `idstore:="myIdStore"`

  - `user`: concerns all fields inside `user_properties`. text matching or numerical comparison.  e.g. `user.myAttribute:="myValue"`

  - `localized`: used for [localizedNames](https://developers.woosmap.com/products/data-api/data-structure/#localizednames) to search in native language. text matching in collection: the value match one of the the `localizedNames`. e.g. `localized:="centro"`

  > **userProperties** field has no restriction regarding the data you can put in it (Arrays, Object, Boolean, String, Numeric...) but you can only query for **text matching or numerical comparison**.

  ### Operators

  - `:` : Default and mandatory operator. For `type` and `tag` fields, define that an element is contained within a collection.

  - `=` : The content of a string or a number is equal to the other.

  - `>` : A number is greater than another.

  - `<` : A number is smaller than another.

  - `>=` : A number is greater than or equal to another.

  - `<=` : A number is smaller than or equal to another.

  - `AND` : Return assets that match both clauses.

  - `OR` : Return assets that match either clauses.

  - `NOT` : Negates a search clause.

  For compound clauses, you can use parentheses to group clauses together. For example: `(type:"type1" OR type:"type2") AND tag:"hockey"`
  You can use `NOT` operator to negates a search clause. For example: `not type:"type1"`

- <h3 class="parameter-name" id="radius">radius</h3>

  Unit in meters. Used to combine with lat/lng or encoded polyline. To bias the results within a given circular area. 3000 means to search for Assets that are at the most far from 3kms to search area (latlng or polyline).

- <h3 class="parameter-name" id="stores_by_page">stores_by_page</h3>

  If your request returns a high number of assets, the result will be paginated. If so, you can request assets by page using `page` and `stores_by_page` parameters (Default is 100, max is 300).

- <h3 class="parameter-name" id="zone">zone</h3>

  returns the stores that are linked to a zone intersecting the provided `lat`,`lng` query parameters.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-storessearch" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-storessearch" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /stores/search" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_storessearch] -->