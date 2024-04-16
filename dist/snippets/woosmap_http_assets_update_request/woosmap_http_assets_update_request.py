# [START woosmap_http_assets_update_request]
import requests
import json

url = "https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "stores": [
        {
            "types": [
                "drive",
                "click_and_collect"
            ],
            "tags": [
                "wifi",
                "covered_parking"
            ],
            "location": {
                "lat": 38.719,
                "lng": -77.1067
            },
            "storeId": "STORE_ID_123456",
            "name": "My Cool Store",
            "address": {
                "lines": [
                    "698-500",
                    " Lloyds Ln"
                ],
                "countryCode": "US",
                "city": "Alexandria",
                "zipcode": "VA 22302"
            },
            "contact": {
                "website": "https://www.woosmap.com",
                "phone": "+44 20 7693 4000",
                "email": "contact@woosmap.com"
            },
            "userProperties": {
                "some_user_properties": "associated user value"
            },
            "openingHours": {
                "timezone": "Europe/London",
                "usual": {
                    "1": [],
                    "default": [
                        {
                            "start": "08:30",
                            "end": "22:00"
                        }
                    ]
                },
                "special": {
                    "2015-02-07": [
                        {
                            "start": "08:00",
                            "end": "23:00"
                        }
                    ]
                }
            }
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_assets_update_request]