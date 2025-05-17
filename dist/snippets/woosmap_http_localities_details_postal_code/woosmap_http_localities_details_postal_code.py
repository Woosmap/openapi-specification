# [START woosmap_http_localities_details_postal_code]
import requests

url = "https://api.woosmap.com/localities/details?public_id=QaCU%2BfBtigK65ztSrqHqUoUDwZw%3D&key=YOUR_PUBLIC_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_details_postal_code]