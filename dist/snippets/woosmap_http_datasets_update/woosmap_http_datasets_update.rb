# [START woosmap_http_datasets_update]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "name": "my_updated_dataset",
  "description": "My updated dataset description"
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_update]