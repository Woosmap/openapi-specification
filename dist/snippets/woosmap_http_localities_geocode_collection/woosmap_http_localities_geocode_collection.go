// [START woosmap_http_localities_geocode_collection]
package main

import (
  "fmt"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/localities/geocode?address=Place%20Jeanne-d%27Arc&components=country%3AFR&key=YOUR_PUBLIC_API_KEY"
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
// [END woosmap_http_localities_geocode_collection]