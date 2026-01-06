# [START woosmap_http_datasets_list]
import requests

url = "https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_list]