# [START woosmap_http_distance_tolls]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/distance/tolls/json?origin=43.70386%2C%204.12200&destination=45.71971%2C%204.84891&mode=driving&private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END woosmap_http_distance_tolls]