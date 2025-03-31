// [START woosmap_http_asset_search_by_zone_feature_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&zone=true&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_asset_search_by_zone_feature_collection]