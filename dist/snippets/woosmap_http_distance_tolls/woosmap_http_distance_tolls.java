// [START woosmap_http_distance_tolls]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/distance/tolls/json?origin=43.70386%2C%204.12200&destination=45.71971%2C%204.84891&mode=driving&private_key=YOUR_PRIVATE_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_distance_tolls]