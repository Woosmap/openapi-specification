// [START woosmap_http_maps_static]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/maps/static?lat=48.8566&lng=2.3522&zoom=14&width=600&height=400&markers=48.8566%2C2.3522&language=en&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_maps_static]