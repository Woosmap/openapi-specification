# [START woosmap_http_zones_delete_request]
import requests

url = "https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_zones_delete_request]