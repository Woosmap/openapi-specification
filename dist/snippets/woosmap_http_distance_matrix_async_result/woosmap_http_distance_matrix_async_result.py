# [START woosmap_http_distance_matrix_async_result]
import requests

url = "https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c?private_key=YOUR_PRIVATE_API_KEY"

payload = {}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_distance_matrix_async_result]