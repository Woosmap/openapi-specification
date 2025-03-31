// [START woosmap_http_distance_matrix_request]
const axios = require('axios');
let data = JSON.stringify({
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "elements": "duration_distance",
  "method": "distance",
  "departure_time": "now"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/distance/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_distance_matrix_request]