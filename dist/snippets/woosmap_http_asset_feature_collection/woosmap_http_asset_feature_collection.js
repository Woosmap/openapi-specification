// [START woosmap_http_asset_feature_collection]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&radius=300&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_asset_feature_collection]