// [START woosmap_http_distance_matrix_async_status]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c/status?private_key=YOUR_PRIVATE_API_KEY',
  headers: { 
    'Referer': 'http://localhost'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_distance_matrix_async_status]