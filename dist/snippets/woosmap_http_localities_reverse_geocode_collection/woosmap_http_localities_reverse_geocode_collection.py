# [START woosmap_http_localities_reverse_geocode_collection]
import requests

url = "https://api.woosmap.com/localities/geocode?latlng=51.52089223979333%2C-0.195460973340401&list_sub_buildings=true&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_reverse_geocode_collection]