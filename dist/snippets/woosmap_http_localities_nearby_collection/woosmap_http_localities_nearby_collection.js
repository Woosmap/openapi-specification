// [START woosmap_http_localities_nearby_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/localities/nearby?types=business&location=40.71399%2C-74.00499&page=3&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_localities_nearby_collection]