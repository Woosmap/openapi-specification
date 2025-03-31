# [START woosmap_http_asset_autocomplete_feature_collection]
import requests

url = "https://api.woosmap.com/stores/autocomplete/?language=en&query=localized%3Astreet&limit=3&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_autocomplete_feature_collection]