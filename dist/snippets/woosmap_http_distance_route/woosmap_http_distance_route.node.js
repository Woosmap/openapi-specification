// [START woosmap_http_distance_route]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/distance/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&mode=driving&language=en&alternatives=true&method=distance&details=full&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_distance_route]