# [START woosmap_http_datasets_contains_features]
import requests
import json

url = "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/contains/?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "geometry": {
        "type": "Point",
        "coordinates": [
            3.883,
            43.6
        ]
    }
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_contains_features]