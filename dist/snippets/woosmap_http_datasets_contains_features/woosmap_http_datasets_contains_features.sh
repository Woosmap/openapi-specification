# [START woosmap_http_datasets_contains_features]
curl -L 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/contains/?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "geometry": {
    "type": "Point",
    "coordinates": [
      3.883,
      43.6
    ]
  }
}'
# [END woosmap_http_datasets_contains_features]