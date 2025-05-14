# [START woosmap_http_localities_geocode_collection]
import requests

url = "https://api.woosmap.com/localities/geocode?address=Place%20Jeanne-d'Arc&components=country%3AFR&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_geocode_collection]