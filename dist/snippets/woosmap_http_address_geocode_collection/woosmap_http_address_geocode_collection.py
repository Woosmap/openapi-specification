# [START woosmap_http_address_geocode_collection]
import requests

url = "https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance%20Paris&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_address_geocode_collection]