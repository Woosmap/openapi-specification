// [START woosmap_http_localities_reverse_geocode_collection]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/localities/geocode?latlng=51.52089223979333%2C-0.195460973340401&list_sub_buildings=true&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_reverse_geocode_collection]