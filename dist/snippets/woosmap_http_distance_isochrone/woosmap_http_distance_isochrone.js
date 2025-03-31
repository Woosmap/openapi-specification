// [START woosmap_http_distance_isochrone]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/distance/isochrone/json?origin=48.709%2C2.403&value=1&mode=driving&language=en&method=distance&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_distance_isochrone]