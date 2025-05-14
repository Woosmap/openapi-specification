// [START woosmap_http_assets_update_simple_request]
const axios = require('axios');
let data = JSON.stringify({
  "stores": [
    {
      "storeId": "store_123",
      "name": "My amazing store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
});

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_assets_update_simple_request]