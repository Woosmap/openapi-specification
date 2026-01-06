# [START woosmap_http_datasets_create]
import requests
import json

url = "https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "name": "my_dataset",
    "description": "My dataset description"
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_create]