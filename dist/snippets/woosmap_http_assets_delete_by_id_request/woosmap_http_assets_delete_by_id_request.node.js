// [START woosmap_http_assets_delete_by_id_request]
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/stores/?query=idstore%3A%3Dstore_123&private_key=YOUR_PRIVATE_API_KEY',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_assets_delete_by_id_request]