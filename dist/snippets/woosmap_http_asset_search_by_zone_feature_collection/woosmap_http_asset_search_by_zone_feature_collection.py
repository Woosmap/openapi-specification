# [START woosmap_http_asset_search_by_zone_feature_collection]
import requests

url = "https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&zone=true&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_search_by_zone_feature_collection]