// [START woosmap_http_distance_isochrone]
package main

import (
  "fmt"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/distance/isochrone/json?origin=48.709%2C2.403&value=1&mode=driving&language=en&method=distance&key=YOUR_PUBLIC_API_KEY"
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
// [END woosmap_http_distance_isochrone]