// [START woosmap_http_asset_feature]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/stores/10031/?key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_asset_feature]