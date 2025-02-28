# [START woosmap_http_distance_tolls]
import requests

url = "https://api.woosmap.com/distance/tolls/json?origin=43.70386%2C%204.12200&destination=45.71971%2C%204.84891&mode=driving&private_key=YOUR_PRIVATE_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_distance_tolls]