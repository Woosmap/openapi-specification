# [START woosmap_http_datasets_intersect_features]
curl -L 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/intersects/?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
-d '{
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          2.3522,
          48.8566
        ],
        [
          2.3622,
          48.8566
        ],
        [
          2.3622,
          48.8666
        ],
        [
          2.3522,
          48.8666
        ],
        [
          2.3522,
          48.8566
        ]
      ]
    ]
  }
}'
# [END woosmap_http_datasets_intersect_features]