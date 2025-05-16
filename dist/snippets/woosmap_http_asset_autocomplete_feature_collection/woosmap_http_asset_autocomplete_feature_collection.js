// [START woosmap_http_asset_autocomplete_feature_collection]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/stores/autocomplete/?language=en&query=localized%3Astreet&limit=3&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_asset_autocomplete_feature_collection]