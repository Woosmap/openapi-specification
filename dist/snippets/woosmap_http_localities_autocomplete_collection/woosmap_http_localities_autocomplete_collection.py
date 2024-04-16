# [START woosmap_http_localities_autocomplete_collection]
import requests

url = "https://api.woosmap.com/localities/autocomplete/?input=Lond&components=country%3Agb&no_deprecated_fields=true&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_autocomplete_collection]