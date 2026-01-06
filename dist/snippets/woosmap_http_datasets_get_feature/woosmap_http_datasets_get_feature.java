// [START woosmap_http_datasets_get_feature]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/497f6eca-6276-4993-bfeb-53cbbbba6f08?private_key=YOUR_PRIVATE_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_datasets_get_feature]