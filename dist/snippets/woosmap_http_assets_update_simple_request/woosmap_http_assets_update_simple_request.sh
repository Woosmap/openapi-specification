# [START woosmap_http_assets_update_simple_request]
curl -L -X PUT 'https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "stores": [
    {
      "storeId": "store_123",
      "name": "My amazing store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
}'
# [END woosmap_http_assets_update_simple_request]