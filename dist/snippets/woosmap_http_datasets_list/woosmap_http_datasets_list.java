// [START woosmap_http_datasets_list]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_list]