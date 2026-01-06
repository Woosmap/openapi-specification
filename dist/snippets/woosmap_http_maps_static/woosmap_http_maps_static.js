// [START woosmap_http_maps_static]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/maps/static?lat=48.8566&lng=2.3522&zoom=14&width=600&height=400&markers=48.8566%2C2.3522&language=en&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_maps_static]