# [START woosmap_http_distance_matrix_async_status]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c/status?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_distance_matrix_async_status]