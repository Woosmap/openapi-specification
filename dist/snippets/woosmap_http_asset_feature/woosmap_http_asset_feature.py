# [START woosmap_http_asset_feature]
import requests

url = "https://api.woosmap.com/stores/10031/?key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_feature]