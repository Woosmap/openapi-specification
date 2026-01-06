# [START woosmap_http_datasets_reimport_webhook]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/datasets/hooks/reimport/my_reimport_key?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({})

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_reimport_webhook]