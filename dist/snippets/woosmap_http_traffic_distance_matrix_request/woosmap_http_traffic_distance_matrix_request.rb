# [START woosmap_http_traffic_distance_matrix_request]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/traffic/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "routing": "fastest",
  "departure_time": "now"
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_traffic_distance_matrix_request]