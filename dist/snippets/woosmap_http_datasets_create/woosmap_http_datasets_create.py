# [START woosmap_http_datasets_create]
import requests
import json

url = "https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "name": "string",
    "url": "http://example.com",
    "schema_mapping": [
        {
            "schema_key": "title",
            "data_key": "string"
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_create]