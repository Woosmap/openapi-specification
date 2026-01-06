# [START woosmap_http_datasets_within_features]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/within/?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          2.3522,
          48.8566
        ],
        [
          2.3622,
          48.8566
        ],
        [
          2.3622,
          48.8666
        ],
        [
          2.3522,
          48.8666
        ],
        [
          2.3522,
          48.8566
        ]
      ]
    ]
  }
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_within_features]