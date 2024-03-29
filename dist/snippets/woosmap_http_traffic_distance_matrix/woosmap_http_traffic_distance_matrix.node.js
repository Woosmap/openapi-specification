// [START woosmap_http_traffic_distance_matrix]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/traffic/distancematrix/json?origins=48.709%2C2.403&destinations=48.709%2C2.303%7C48.768%2C2.338&routing=shortest&language=en&departure_time=now&key=YOUR_PUBLIC_API_KEY',
  headers: { 
    'Referer': 'http://localhost'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_traffic_distance_matrix]