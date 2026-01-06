// [START woosmap_http_distance_matrix_async_status]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c/status?private_key=YOUR_PRIVATE_API_KEY")
  .method("GET", body)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_distance_matrix_async_status]