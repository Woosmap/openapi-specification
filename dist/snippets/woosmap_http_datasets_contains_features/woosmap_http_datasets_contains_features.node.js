// [START woosmap_http_datasets_contains_features]
const axios = require('axios');
let data = JSON.stringify({
  "geometry": {
    "type": "Point",
    "coordinates": [
      3.883,
      43.6
    ]
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/contains/?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_datasets_contains_features]