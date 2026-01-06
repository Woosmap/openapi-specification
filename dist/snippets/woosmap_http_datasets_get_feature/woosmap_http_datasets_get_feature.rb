# [START woosmap_http_datasets_get_feature]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/497f6eca-6276-4993-bfeb-53cbbbba6f08?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END woosmap_http_datasets_get_feature]