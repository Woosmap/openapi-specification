# [START woosmap_http_datasets_reimport_webhook]
import requests
import json

url = "https://api.woosmap.com/datasets/hooks/reimport/my_reimport_key?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_reimport_webhook]