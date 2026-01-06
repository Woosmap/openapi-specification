# [START woosmap_http_datasets_contains_features]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/contains/?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "geometry": {
    "type": "Point",
    "coordinates": [
      3.883,
      43.6
    ]
  }
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_contains_features]