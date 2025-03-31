// [START woosmap_http_localities_details_postal_code]
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/localities/details?public_id=QaCU%2BfBtigK65ztSrqHqUoUDwZw%3D&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_details_postal_code]