// [START woosmap_http_zones_collection]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY&limit=2&offset=1',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_zones_collection]