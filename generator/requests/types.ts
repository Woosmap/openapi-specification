import {RequestBody, Request as Request_, Url} from "postman-collection";

// TODO current Request.definition is incorrect and requires fields
interface Options {
    url: Url | string;
    method?: string;
    header?: { key: string; value: string }[];
    body?: RequestBody.definition;
}

export class Request extends Request_ {
    constructor(options: Options) {
        if (typeof options.url === "string") {
            options.url = new Url(options.url);
        }
        if (options.method && ['POST', 'PUT', 'DELETE', 'UPDATE'].indexOf(options.method) > -1) {
            if (options.url.getQueryString().indexOf("private_key=") == -1) {
                options.url.addQueryParams({key: "private_key", value: "YOUR_PRIVATE_API_KEY"});
            }
        } else if (options.url.getQueryString().indexOf("key=") == -1) {
            options.url.addQueryParams({key: "key", value: "YOUR_PUBLIC_API_KEY"});
        }

        options.url = options.url.toString();

        super(options as Request_.definition);
    }
}

interface PostJsonOptions extends Options {
    json: object;
}

export class DeleteRequest extends Request {
    constructor(options: Options) {
        options.method = "DELETE";
        super(options);
    }
}

export class PutJsonRequest extends Request {
    constructor(options: PostJsonOptions) {
        options.header = [{key: "content-type", value: "application/json"}];
        options.method = "PUT";

        options.body = {
            mode: "raw",
            raw: JSON.stringify(options.json, null, 2),
        } as RequestBody.definition;

        super(options);
    }
}


export class PostJsonRequest extends Request {
    constructor(options: PostJsonOptions) {
        options.header = [{key: "content-type", value: "application/json"}];
        options.method = "POST";

        options.body = {
            mode: "raw",
            raw: JSON.stringify(options.json, null, 2),
        } as RequestBody.definition;

        super(options);
    }
}

export interface SnippetRequest {
    request: Request;
    regionTag: string;
}
