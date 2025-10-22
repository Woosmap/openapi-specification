# [START woosmap_http_localities_nearby_collection]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/localities/nearby?types=business&location=40.71399%2C-74.00499&page=3&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_localities_nearby_collection]