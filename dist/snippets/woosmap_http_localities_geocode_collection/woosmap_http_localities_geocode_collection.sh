# [START woosmap_http_localities_geocode_collection]
curl -L -X GET 'https://api.woosmap.com/localities/geocode?address=Place%20Jeanne-d'\''Arc&components=country%3AFR&key=YOUR_PUBLIC_API_KEY' \
-H 'Referer: http://localhost'
# [END woosmap_http_localities_geocode_collection]