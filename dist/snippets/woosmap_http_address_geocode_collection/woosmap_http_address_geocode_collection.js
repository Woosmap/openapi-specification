// [START woosmap_http_address_geocode_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance%20Paris&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_address_geocode_collection]