// [START woosmap_http_zones_collection_request]
const axios = require('axios');
let data = JSON.stringify({
  "zones": [
    {
      "zone_id": "ZoneA",
      "description": "Delivery Zone for Store A",
      "store_id": "STORE_ID_123456",
      "polygon": "POLYGON ((-122.496116 37.7648181,-122.4954079 37.751518,-122.4635648 37.7530788,-122.4618481 37.7514501,-122.4601315 37.7521288,-122.4565266 37.7513144,-122.4540375 37.7566755,-122.4528359 37.7583041,-122.4515485 37.7595934,-122.4546384 37.774656,-122.4718903 37.7731635,-122.472577 37.772485,-122.4755811 37.7725529,-122.4791001 37.7723493,-122.4793576 37.7713995,-122.4784993 37.769839,-122.4783276 37.7680071,-122.4774693 37.766718,-122.4772118 37.7652931,-122.496116 37.7648181))",
      "types": [
        "delivery"
      ]
    },
    {
      "zone_id": "ZoneB",
      "description": "Delivery Zone for Store B",
      "store_id": "STORE_ID_123456",
      "polygon": "POLYGON ((-122.4546384 37.774656,-122.4515485 37.7595934,-122.4354306 37.7602172,-122.4333707 37.7512596,-122.423071 37.7511239,-122.4242726 37.7687665,-122.4259893 37.7691736,-122.4289075 37.7732444,-122.4306241 37.7850483,-122.4472753 37.7830133,-122.445902 37.7759581,-122.4546384 37.774656))",
      "types": [
        "delivery"
      ]
    },
    {
      "zone_id": "ZoneC",
      "description": "Delivery Zone for Store C",
      "store_id": "STORE_ID_45678",
      "polygon": "POLYGON ((-122.4758889 37.7524995,-122.4751594 37.7321718,-122.4688079 37.7299995,-122.4648597 37.7261979,-122.4519851 37.7228035,-122.4483802 37.7215815,-122.4458053 37.726741,-122.4365356 37.7310857,-122.4315574 37.7324433,-122.4246909 37.7312214,-122.4219444 37.731493,-122.423071 37.7511239,-122.4333707 37.7512596,-122.4354306 37.7602172,-122.4515485 37.7595934,-122.4528628 37.7582744,-122.4540375 37.7566755,-122.4565266 37.7513144,-122.4601315 37.7521288,-122.4618481 37.7514501,-122.4635648 37.7530788,-122.4758889 37.7524995))",
      "types": [
        "delivery"
      ]
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.woosmap.com/zones?private_key=YOUR_PRIVATE_API_KEY',
  headers: { 
    'content-type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// [END woosmap_http_zones_collection_request]