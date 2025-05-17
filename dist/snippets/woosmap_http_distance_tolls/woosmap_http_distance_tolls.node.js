// [START woosmap_http_distance_tolls]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/distance/tolls/json?origin=43.70386%2C%204.12200&destination=45.71971%2C%204.84891&mode=driving&private_key=YOUR_PRIVATE_API_KEY',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_distance_tolls]