# [START woosmap_http_datasets_get_feature]
import requests

url = "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/my_feature_id?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_get_feature]