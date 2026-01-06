# [START woosmap_http_datasets_within_features]
import requests
import json

url = "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/within/?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    2.3522,
                    48.8566
                ],
                [
                    2.3622,
                    48.8566
                ],
                [
                    2.3622,
                    48.8666
                ],
                [
                    2.3522,
                    48.8666
                ],
                [
                    2.3522,
                    48.8566
                ]
            ]
        ]
    }
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_datasets_within_features]