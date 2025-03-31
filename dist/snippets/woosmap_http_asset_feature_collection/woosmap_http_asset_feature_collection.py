# [START woosmap_http_asset_feature_collection]
import requests

url = "https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&radius=300&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_feature_collection]