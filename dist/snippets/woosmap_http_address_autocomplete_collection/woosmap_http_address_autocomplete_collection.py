# [START woosmap_http_address_autocomplete_collection]
import requests

url = "https://api.woosmap.com/address/autocomplete/json?input=Lond&components=country%3Agb&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_address_autocomplete_collection]