// [START woosmap_http_localities_reverse_geocode_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/localities/geocode?latlng=51.52089223979333%2C-0.195460973340401&list_sub_buildings=true&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_localities_reverse_geocode_collection]