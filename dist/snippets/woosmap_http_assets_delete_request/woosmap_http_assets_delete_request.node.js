// [START woosmap_http_assets_delete_request]
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/stores/?private_key=YOUR_PRIVATE_API_KEY',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_assets_delete_request]