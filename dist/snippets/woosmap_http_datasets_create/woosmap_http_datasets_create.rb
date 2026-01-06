# [START woosmap_http_datasets_create]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "name": "string",
  "url": "http://example.com",
  "schema_mapping": [
    {
      "schema_key": "title",
      "data_key": "string"
    }
  ]
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_create]