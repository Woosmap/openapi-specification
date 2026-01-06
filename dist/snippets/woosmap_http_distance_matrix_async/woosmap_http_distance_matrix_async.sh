# [START woosmap_http_distance_matrix_async]
curl -L 'https://api.woosmap.com/distance/matrix/async?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "mode": "driving"
}'
# [END woosmap_http_distance_matrix_async]