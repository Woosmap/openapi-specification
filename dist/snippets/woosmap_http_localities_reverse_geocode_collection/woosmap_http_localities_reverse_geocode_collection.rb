# [START woosmap_http_localities_reverse_geocode_collection]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/localities/geocode?latlng=51.52089223979333%2C-0.195460973340401&list_sub_buildings=true&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_localities_reverse_geocode_collection]