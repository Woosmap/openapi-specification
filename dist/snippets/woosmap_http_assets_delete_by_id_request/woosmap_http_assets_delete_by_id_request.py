# [START woosmap_http_assets_delete_by_id_request]
import requests

url = "https://api.woosmap.com/stores/?query=idstore%3A%3Dstore_123&private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_assets_delete_by_id_request]