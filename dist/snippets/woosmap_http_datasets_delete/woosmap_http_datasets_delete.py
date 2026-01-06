# [START woosmap_http_datasets_delete]
import requests

url = "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_delete]