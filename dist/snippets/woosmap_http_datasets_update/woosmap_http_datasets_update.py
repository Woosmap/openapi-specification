# [START woosmap_http_datasets_update]
import requests
import json

url = "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "name": "string",
    "url": "http://example.com"
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_update]