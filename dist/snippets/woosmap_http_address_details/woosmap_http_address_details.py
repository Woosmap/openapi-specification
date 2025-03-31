# [START woosmap_http_address_details]
import requests

url = "https://api.woosmap.com/address/details/json?public_id=aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_address_details]