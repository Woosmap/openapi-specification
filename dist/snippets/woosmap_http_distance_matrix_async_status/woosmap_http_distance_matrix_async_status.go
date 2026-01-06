// [START woosmap_http_distance_matrix_async_status]
package main

import (
  "fmt"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/distance/matrix/async/39585bfc-59cc-478c-9b87-12685c9b880c/status?private_key=YOUR_PRIVATE_API_KEY"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Referer", "http://localhost")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
// [END woosmap_http_distance_matrix_async_status]