# [START woosmap_http_traffic_distance_route]
import requests

url = "https://api.woosmap.com/traffic/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&routing=shortest&language=en&alternatives=true&departure_time=now&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_traffic_distance_route]