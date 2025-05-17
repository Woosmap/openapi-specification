# [START woosmap_http_zones]
import requests

url = "https://api.woosmap.com/zones/ZoneA/?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_zones]