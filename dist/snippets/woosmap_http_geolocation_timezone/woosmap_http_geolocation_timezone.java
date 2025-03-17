// [START woosmap_http_geolocation_timezone]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/geolocation/timezone?private_key=YOUR_PRIVATE_API_KEY&location=43.6114130%2C3.8735291")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_geolocation_timezone]