# [START woosmap_http_geolocation_timezone]
import requests

url = "https://api.woosmap.com/geolocation/timezone?private_key=YOUR_PRIVATE_API_KEY&location=43.6114130%2C3.8735291"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_geolocation_timezone]