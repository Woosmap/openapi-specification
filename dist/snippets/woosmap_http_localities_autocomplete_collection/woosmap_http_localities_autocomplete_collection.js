// [START woosmap_http_localities_autocomplete_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/localities/autocomplete/?input=Lond&components=country%3Agb&no_deprecated_fields=true&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_localities_autocomplete_collection]