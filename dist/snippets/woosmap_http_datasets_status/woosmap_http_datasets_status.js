// [START woosmap_http_datasets_status]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/status?private_key=YOUR_PRIVATE_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_datasets_status]