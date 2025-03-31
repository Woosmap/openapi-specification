// [START woosmap_http_localities_details_address]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/localities/details?public_id=TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ%3D%3D&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_localities_details_address]