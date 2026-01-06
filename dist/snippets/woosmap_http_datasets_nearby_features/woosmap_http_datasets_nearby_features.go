// [START woosmap_http_datasets_nearby_features]
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/nearby/?private_key=YOUR_PRIVATE_API_KEY"
  method := "POST"

  payload := strings.NewReader(`{
  "geometry": {
    "type": "Point",
    "coordinates": [
      3.883,
      43.6
    ]
  },
  "buffer": 5000
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("content-type", "application/json")

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
// [END woosmap_http_datasets_nearby_features]