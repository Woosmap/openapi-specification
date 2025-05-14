// [START woosmap_http_address_details]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/address/details/json?public_id=aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_address_details]