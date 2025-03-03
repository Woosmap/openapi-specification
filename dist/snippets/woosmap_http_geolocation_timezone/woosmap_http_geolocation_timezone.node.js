// [START woosmap_http_geolocation_timezone]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/geolocation/timezone?private_key=YOUR_PRIVATE_API_KEY&location=43.6114130%2C3.8735291',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_geolocation_timezone]