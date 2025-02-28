// [START woosmap_http_distance_tolls]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/distance/tolls/json?origin=43.70386%2C%204.12200&destination=45.71971%2C%204.84891&mode=driving&private_key=YOUR_PRIVATE_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_distance_tolls]