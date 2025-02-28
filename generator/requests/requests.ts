import {DeleteRequest, PostJsonRequest, PutJsonRequest, Request, SnippetRequest} from "./types";

import {Url} from "postman-collection";
import path from "path";
import {readFileSync} from "fs";
import yaml from "js-yaml";

function parseRequestBody(filename) {
    if (filename.match(/\.yml$/)) {
        return yaml.load(
            readFileSync(path.resolve(__dirname, filename)).toString()
        );
    }

    return JSON.parse(
        readFileSync(path.resolve(__dirname, filename)).toString()
    ) as any;
}

export const REQUESTS: SnippetRequest[] = [
    {
        regionTag: "woosmap_http_assets_create_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_address_autocomplete_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/autocomplete/json",
                query: [
                    {
                        key: "input",
                        value: "Lond",
                    },
                    {
                        key: "components",
                        value: "country:gb",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_address_details",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/details/json",
                query: [
                    {
                        key: "public_id",
                        value: "aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_address_geocode_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/geocode/json",
                query: [
                    {
                        key: "address",
                        value: "Place de la Resistance Paris",
                    },
                    {
                        key: "components",
                        value: "country:FR"
                    },
                    {
                        key: "limit",
                        value: "5"
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_distance_matrix",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/distancematrix/json",
                query: [
                    {
                        key: "origins",
                        value: "48.709,2.403",
                    },
                    {
                        key: "destinations",
                        value: "48.709,2.303|48.768,2.338",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "elements",
                        value: "duration_distance",
                    },
                    {
                        key: "method",
                        value: "distance",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_distance_matrix_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/distance/distancematrix/json",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_distance_matrix_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_distance_route",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/route/json",
                query: [
                    {
                        key: "origin",
                        value: "49.31067,4.14525",
                    },
                    {
                        key: "destination",
                        value: "49.31344,4.15293",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "alternatives",
                        value: "true",
                    },
                    {
                        key: "method",
                        value: "distance",
                    },
                    {
                        key: "details",
                        value: "full",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_distance_tolls",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/tolls/json",
                query: [
                    {
                        key: "origin",
                        value: "43.70386, 4.12200",
                    },
                    {
                        key: "destination",
                        value: "45.71971, 4.84891",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    }
                ],
            }),
        }),
    },
    {
        regionTag: "woosmap_http_distance_isochrone",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/isochrone/json",
                query: [
                    {
                        key: "origin",
                        value: "48.709,2.403",
                    },
                    {
                        key: "value",
                        value: "1",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "method",
                        value: "distance",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_traffic_distance_matrix",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/traffic/distancematrix/json",
                query: [
                    {
                        key: "origins",
                        value: "48.709,2.403",
                    },
                    {
                        key: "destinations",
                        value: "48.709,2.303|48.768,2.338",
                    },
                    {
                        key: "routing",
                        value: "shortest",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "departure_time",
                        value: "now",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_traffic_distance_matrix_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/traffic/distancematrix/json",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_traffic_distance_matrix_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_traffic_distance_route",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/traffic/route/json",
                query: [
                    {
                        key: "origin",
                        value: "49.31067,4.14525",
                    },
                    {
                        key: "destination",
                        value: "49.31344,4.15293",
                    },
                    {
                        key: "routing",
                        value: "shortest",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "alternatives",
                        value: "true",
                    },
                    {
                        key: "departure_time",
                        value: "now",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_geolocation_position",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/geolocation/position",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "ip_address",
                        value: "173.79.254.254",
                    },
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_geolocation_stores",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/geolocation/stores",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "ip_address",
                        value: "173.79.254.254",
                    },
                    {
                        key: "limit",
                        value: "1",
                    },
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_localities_autocomplete_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/autocomplete/",
                query: [
                    {
                        key: "input",
                        value: "Lond",
                    },
                    {
                        key: "components",
                        value: "country:gb",
                    },
                    {
                        key: "no_deprecated_fields",
                        value: "true",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_details_address",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/details",
                query: [
                    {
                        key: "public_id",
                        value: "TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ==",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_details_postal_code",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/details",
                query: [
                    {
                        key: "public_id",
                        value: "QaCU+fBtigK65ztSrqHqUoUDwZw=",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_geocode_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/geocode",
                query: [
                    {
                        key: "address",
                        value: "Place Jeanne-d'Arc",
                    },
                    {
                        key: "components",
                        value: "country:FR"
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_reverse_geocode_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/geocode",
                query: [
                    {
                        key: "latlng",
                        value: "51.52089223979333,-0.195460973340401",
                    },
                    {
                        key: "list_sub_buildings",
                        value: "true"
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_nearby_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/nearby",
                query: [
                    {
                        key: "types",
                        value: "point_of_interest"
                    },
                    {
                        key: "location",
                        value: "40.71399,-74.00499",
                    },
                    {
                        key:"categories",
                        value:"business"
                    },
		            {
                        key:"page",
                        value:"3"
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_asset_feature_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/search/",
                query: [
                    {
                        key: "lat",
                        value: "51.50976",
                    },
                    {
                        key: "lng",
                        value: "-0.145276",
                    },
                    {
                        key: "radius",
                        value: "300",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_bounds_search",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/search/bounds",
                query: [
                    {
                        key: "lat",
                        value: "51.50976",
                    },
                    {
                        key: "lng",
                        value: "-0.145276",
                    },
                    {
                        key: "radius",
                        value: "300",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_asset_autocomplete_feature_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/autocomplete/",
                query: [
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "query",
                        value: "localized:street",
                    },
                    {
                        key: "limit",
                        value: "3",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_asset_feature",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/10031/"
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_assets_replace_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores/replace",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_assets_update_request",
        request: new PutJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_update_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_zones_collection_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/zones",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_zones_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_zones",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/ZoneA/",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    }
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_zones_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "limit",
                        value: "2",
                    },
                    {
                        key: "offset",
                        value: "1",
                    },

                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_zones_update_request",
        request: new PutJsonRequest({
            url: "https://api.woosmap.com/zones",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_zones_update_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_asset_search_by_zone_feature_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/search/",
                query: [
                    {
                        key: "lat",
                        value: "51.50976",
                    },
                    {
                        key: "lng",
                        value: "-0.145276",
                    },
                    {
                        key: "zone",
                        value: "true",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_zones_delete_request",
        request: new DeleteRequest({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/"
            }),
        }),
    },
    {
        regionTag: "woosmap_http_assets_delete_request",
        request: new DeleteRequest({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/"
            }),
        }),
    },
    {
        regionTag: "woosmap_http_assets_create_simple_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_simple_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_assets_replace_simple_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores/replace",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_simple_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_assets_update_simple_request",
        request: new PutJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_update_simple_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_assets_delete_by_id_request",
        request: new DeleteRequest({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/",
                query: [
                    {
                        key: "query",
                        value: "idstore:=store_123",
                    },
                ],
            }),
        }),
    },

];
