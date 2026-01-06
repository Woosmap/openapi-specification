// [START woosmap_http_datasets_reimport_webhook]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/hooks/reimport/my_reimport_key?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_reimport_webhook]