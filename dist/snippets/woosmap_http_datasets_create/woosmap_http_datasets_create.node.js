// [START woosmap_http_datasets_create]
const axios = require('axios');
let data = JSON.stringify({
  "name": "my_dataset",
  "description": "My dataset description"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/datasets/?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_datasets_create]