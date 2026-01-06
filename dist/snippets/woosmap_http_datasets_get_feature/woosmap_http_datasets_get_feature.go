// [START woosmap_http_datasets_get_feature]
package main

import (
  "fmt"
  "net/http"
  "io"
)

func main() {

  url := "https://api.woosmap.com/datasets/8c4c51f1-f6f3-43bc-b65d-7415e8ef22c0/features/my_feature_id?private_key=YOUR_PRIVATE_API_KEY"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
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
// [END woosmap_http_datasets_get_feature]