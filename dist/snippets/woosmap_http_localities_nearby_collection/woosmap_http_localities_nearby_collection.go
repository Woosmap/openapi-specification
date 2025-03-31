// [START woosmap_http_localities_nearby_collection]
package main

import (
  "fmt"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/localities/nearby?types=point_of_interest&location=40.71399%2C-74.00499&categories=business&page=3&key=YOUR_PUBLIC_API_KEY"
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
// [END woosmap_http_localities_nearby_collection]