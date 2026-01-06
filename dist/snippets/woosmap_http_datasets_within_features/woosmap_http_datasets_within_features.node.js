// [START woosmap_http_datasets_within_features]
const axios = require('axios');
let data = JSON.stringify({
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
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/within/?private_key=YOUR_PRIVATE_API_KEY',
  headers: { 
    'content-type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_datasets_within_features]