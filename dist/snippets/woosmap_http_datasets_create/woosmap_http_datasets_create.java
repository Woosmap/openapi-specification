// [START woosmap_http_datasets_create]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"name\": \"my_dataset\",\n  \"description\": \"My dataset description\"\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_create]