// [START woosmap_http_geolocation_position]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/geolocation/position?private_key=YOUR_PRIVATE_API_KEY&ip_address=173.79.254.254',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_geolocation_position]