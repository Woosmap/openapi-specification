# [START woosmap_http_datasets_reimport_webhook]
curl -L 'https://api.woosmap.com/datasets/hooks/reimport/my_reimport_key?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{}'
# [END woosmap_http_datasets_reimport_webhook]