// [START woosmap_http_traffic_distance_matrix_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"origins\": \"48.73534,2.368308|48.73534,2.368308\",\n  \"destinations\": \"48.83534,2.368308\",\n  \"units\": \"imperial\",\n  \"routing\": \"fastest\",\n  \"departure_time\": \"now\"\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/traffic/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_traffic_distance_matrix_request]