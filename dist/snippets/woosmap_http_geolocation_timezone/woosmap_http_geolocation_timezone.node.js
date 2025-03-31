// [START woosmap_http_geolocation_timezone]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/geolocation/timezone?private_key=YOUR_PRIVATE_API_KEY&location=43.6114130%2C3.8735291',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_geolocation_timezone]