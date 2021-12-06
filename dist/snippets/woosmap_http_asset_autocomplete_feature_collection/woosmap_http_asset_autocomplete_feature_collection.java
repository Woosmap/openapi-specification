// [START woosmap_http_asset_autocomplete_feature_collection]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/stores/autocomplete/?key=woos-48c80350-88aa-333e-835a-07f4b658a9a4&lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_asset_autocomplete_feature_collection]