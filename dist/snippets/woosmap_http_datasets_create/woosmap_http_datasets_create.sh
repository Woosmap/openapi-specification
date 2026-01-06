# [START woosmap_http_datasets_create]
curl -L 'https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "name": "my_dataset",
  "description": "My dataset description"
}'
# [END woosmap_http_datasets_create]