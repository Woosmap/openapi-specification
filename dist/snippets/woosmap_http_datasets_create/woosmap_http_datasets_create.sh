# [START woosmap_http_datasets_create]
curl -L 'https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "name": "string",
  "url": "http://example.com",
  "schema_mapping": [
    {
      "schema_key": "title",
      "data_key": "string"
    }
  ]
}'
# [END woosmap_http_datasets_create]