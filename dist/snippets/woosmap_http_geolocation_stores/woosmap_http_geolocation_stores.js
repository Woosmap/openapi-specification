// [START woosmap_http_geolocation_stores]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/geolocation/stores?private_key=YOUR_PRIVATE_API_KEY&ip_address=173.79.254.254&limit=1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_geolocation_stores]