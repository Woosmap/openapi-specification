# [START woosmap_http_assets_create_simple_request]
curl -L 'https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "stores": [
    {
      "storeId": "store_123",
      "name": "My first cool store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
}'
# [END woosmap_http_assets_create_simple_request]