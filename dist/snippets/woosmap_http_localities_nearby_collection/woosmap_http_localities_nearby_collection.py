# [START woosmap_http_localities_nearby_collection]
import requests

url = "https://api.woosmap.com/localities/nearby?types=point_of_interest&location=40.71399%2C-74.00499&categories=business&page=3&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_nearby_collection]