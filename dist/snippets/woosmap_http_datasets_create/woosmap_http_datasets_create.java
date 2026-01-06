// [START woosmap_http_datasets_create]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"name\": \"string\",\n  \"url\": \"http://example.com\",\n  \"schema_mapping\": [\n    {\n      \"schema_key\": \"title\",\n      \"data_key\": \"string\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_create]