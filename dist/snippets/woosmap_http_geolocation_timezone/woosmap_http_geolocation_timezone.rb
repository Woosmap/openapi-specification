# [START woosmap_http_geolocation_timezone]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/geolocation/timezone?private_key=YOUR_PRIVATE_API_KEY&location=43.6114130%2C3.8735291")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END woosmap_http_geolocation_timezone]