# [START woosmap_http_datasets_update]
curl -L -X PUT 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "name": "string",
  "url": "http://example.com"
}'
# [END woosmap_http_datasets_update]