import {REQUESTS} from "./requests";
import {SnippetRequest} from "./types";
import {writeFileSync, existsSync, mkdirSync} from "fs";
import {convert as generateSnippetCB} from "postman-code-generators";
import yargs from "yargs";
import {promisify} from "util";
import {Request} from "postman-collection";
import queryString from "query-string";
import prettier from "prettier";
import path from "path";


const SNIPPET_LANG_VARIANTS_LABEL = [
    ["python", "requests", "Python"],
    ["javascript", "fetch", "JavaScript"],
    ["nodejs", "axios", "NodeJS"],
    ["curl", "curl", "cURL"],
];

const GENERATOR_OPTIONS = {
    nodejs: {},
    curl: {multiLine: true, longFormat: false},
    python: {indentCount: 4},
};

const urlSnippet = (request: Request, encode = true): string => {
    return [
        `https://${request.url.getHost()}${request.url.getPath()}`,
        queryString
            .stringify(request.url.query.toObject(), {
                encode,
                sort: (a, b) => {
                    if (a === "key") {
                        return 1;
                    }
                    if (b === "key") {
                        return -1;
                    }
                    if (a < b) {
                        return -1;
                    }
                    return 1;
                },
            })
            .split("&")
            .join("\n  &"),
    ].join("\n  ?");
};

const generateSnippet = async (
    lang: string,
    variant: string,
    request: Request,
    options: any
): Promise<string | undefined> => {
    if (lang === "http") {
        if (request.method === "GET") {
            return urlSnippet(request);
        } else {
            return;
        }
    }

    request = request.clone();

    if (lang === "javascript") {
        request.removeHeader('Referer', {ignoreCase: false})
    }

    const params = Object.entries(request.url.query.toObject()) as [
        string,
        any
    ][];

    request.url.query.clear();
    request.url.addQueryParams(
        params.map(([k, v]) => ({key: k, value: encodeURIComponent(v)}))
    );

    return promisify(generateSnippetCB)(lang, variant, request, options);
};

const argv = yargs(process.argv.slice(2)).options({
    output: {
        type: "string",
        demandOption: true,
    }
}).argv;


interface xCodeSample {
    lang?: string;
    label?: string;
    source?: string;
}

const xCodeSamples = async (output, regionTag, lang, sample) => {
    console.log(`Generating samples for: ${regionTag}.${lang}`);
    const directory = path.join(output, regionTag);
    if (!existsSync(directory)) {
        mkdirSync(directory)
    }
    const destination = path.join(directory, `${regionTag}.${lang}.yml`);
    writeFileSync(
        destination,
        await prettier.format(
            `${JSON.stringify(sample, null, 2)}`,
            {parser: "yaml"}
        )
    );
};

const main = async (argv: any) => {
    let sample: xCodeSample = {};
    await Promise.all(
        REQUESTS.map((snippetRequest: SnippetRequest) =>
            SNIPPET_LANG_VARIANTS_LABEL.map(async ([lang, variant, label]) => {
                const {request, regionTag} = snippetRequest;
                const code = await generateSnippet(lang, variant, request as Request, {
                    trimRequestBody: true,
                    ...GENERATOR_OPTIONS[lang],
                });

                if (!code) return;

                ["%252c", "%257C"].forEach((s) => {
                    if (code.indexOf(s) !== -1) {
                        throw new Error(
                            `url was encoded twice for ${regionTag} ${lang} ${variant} \n${code}`
                        );
                    }
                });

                sample = {
                    "lang": lang,
                    "label": label,
                    "source": code
                };
                await xCodeSamples(argv.output, regionTag, lang, sample);
            })
        )
    )
};

main(argv);
