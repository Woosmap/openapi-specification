# [START woosmap_http_maps_static]
import requests

url = "https://api.woosmap.com/maps/static?lat=48.8566&lng=2.3522&zoom=14&width=600&height=400&markers=48.8566%2C2.3522&language=en&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_maps_static]