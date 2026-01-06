// [START woosmap_http_datasets_contains_features]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"geometry\": {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      3.883,\n      43.6\n    ]\n  }\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/contains/?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_contains_features]