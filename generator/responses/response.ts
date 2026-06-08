import yargs from "yargs";
import tar from "tar-stream";
import {
    createReadStream,
    writeFileSync
} from "fs";
import {exec} from "child_process";
import path from "path";
import prettier from "prettier";

const header = ``;

const argv = yargs(process.argv.slice(2)).options({
    archive: {
        type: "string",
        demandOption: true,
    },
    output: {
        type: "string",
        demandOption: true,
    },
    skip: {type: "string"},
    only: {type: "string"},
}).argv;

const extractRequests = async (
    archive: string
): Promise<{ [key: string]: string }> => {
    return new Promise((resolve) => {
        const extract = tar.extract();
        const requests: { [key: string]: string } = {};

        extract.on("entry", function (header, stream, callback) {
            stream.on("data", function (chunk) {
                const match = header.name.match(/snippets\/.*\/(.*)\.sh/);

                if (match) {
                    const name = match[1];

                    requests[name] = requests[name] || "";
                    requests[name] += chunk;
                }
            });

            stream.on("end", function () {
                callback();
            });

            stream.resume();
        });

        extract.on("finish", function () {
            resolve(requests);
        });

        createReadStream(archive).pipe(extract);
    });
};

const executeJSONRequest = async (
    request: string,
    captureError: boolean = false,
    captureInvalid: boolean = false
): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(request, function (error, stdout, stderr) {
            // request failed with non 200 error
            if (error) {
                reject(stderr);
            }

            let response: any;

            try {
                response = JSON.parse(stdout) as any;
            } catch (e) {
                reject(stdout);
                return;
            }
            // todo: get status code when executing the request (e.g. --write-out %{http_code})
            if (response.error && !captureError && !captureInvalid) {
                reject(stdout);
                return;
            }
            resolve(response);
        });
    });
};

const response = async (output, regionTag, request) => {
    regionTag += "_response";
    console.log(`Generating response for: ${regionTag}`);

    const captureError = /error/i.test(regionTag);
    const captureInvalid = /invalid/i.test(regionTag);

    request = request.replace("YOUR_PUBLIC_API_KEY", process.env.WOOSMAP_PUBLIC_API_KEY!);
    request = request.replace("YOUR_PRIVATE_API_KEY", process.env.WOOSMAP_PRIVATE_API_KEY!);

    // Default JSON response
    const response = await executeJSONRequest(request, captureError, captureInvalid);

    const destination = path.join(output, `${regionTag}.yml`);

    writeFileSync(
        destination,
        await prettier.format(
            `${header}
        # [START ${regionTag}]
        ${JSON.stringify(response, null, 2)}
        # [END ${regionTag}]
      `,
            {parser: "yaml"}
        )
    );
};

const toArray = (value: string | string[]): string[] => {
    return Array.isArray(value) ? value : [value];
};

const main = async (argv: any) => {
    const skip = toArray(argv.skip ?? []);
    const only = toArray(argv.only ?? []);

    const requests = Object.entries(await extractRequests(argv.archive)).filter(
        ([regionTag]) => {
            if (skip.length && skip.indexOf(regionTag) !== -1) {
                return false;
            }

            if (only.length && only.indexOf(regionTag) === -1) {
                return false;
            }
            console.log(regionTag);
            return true;
        }
    );

    for (let [regionTag, request] of requests) {
        await response(argv.output, regionTag, request);
    }
};

main(argv);
