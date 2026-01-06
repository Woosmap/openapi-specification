// [START woosmap_http_distance_matrix_async_status]
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c/status?private_key=YOUR_PRIVATE_API_KEY", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// [END woosmap_http_distance_matrix_async_status]