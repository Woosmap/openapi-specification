# [START woosmap_http_datasets_search_features]
curl -L 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/search/?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "where": "cost_col:>32.3"
}'
# [END woosmap_http_datasets_search_features]