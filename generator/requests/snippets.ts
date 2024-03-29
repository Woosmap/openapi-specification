import {REQUESTS} from "./requests";
import {SnippetRequest} from "./types";
import {createWriteStream} from "fs";
import {convert as generateSnippetCB} from "postman-code-generators";
import {options} from "yargs";
import {promisify} from "util";
import tar from "tar-stream";
import {Request} from "postman-collection";
import queryString from "query-string";

enum CommentPrefix {
    nodejs = "//",
    javascript = "//",
    go = "//",
    curl = "#",
    python = "#",
    java = "//",
    ruby = "#",
    http = "",
}

enum Extensions {
    nodejs = "node.js",
    javascript = "js",
    go = "go",
    curl = "sh",
    python = "py",
    java = "java",
    ruby = "rb",
    http = "txt",
}

const SNIPPET_LANG_VARIANTS = [
    ["javascript", "fetch"],
    ["nodejs", "axios"],
    ["curl", "curl"],
    ["go", "native"],
    ["python", "requests"],
    ["java", "okhttp"],
    ["ruby", "net::http"],
    ["http", "http"],
];

const GENERATOR_OPTIONS = {
    nodejs: {},
    javascript: {},
    go: {},
    curl: {multiLine: true, longFormat: false},
    python: {indentCount: 4},
    java: {},
    ruby: {},
    http: {}
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
        return urlSnippet(request);
    }

    request = request.clone();

    if (lang === "javascript") {
        if (request.method === "GET") {
            request.removeHeader('Referer', {ignoreCase: false})
        } else {
            return;
        }
    }

    const params = Object.entries(request.url.query.toObject()) as [
        string,
        any
    ][];


    if (lang !== "go") {
        request.url.query.clear();
        request.url.addQueryParams(
            params.map(([k, v]) => ({key: k, value: encodeURIComponent(v)}))
        );
    }

    return promisify(generateSnippetCB)(lang, variant, request, options);
};

const argv = options({
    output: {
        type: "string",
        demandOption: true,
    },
}).argv;

const regionTagComment = (
    type: "START" | "END",
    regionTag: string,
    lang: string
) => {
    let prefix = CommentPrefix[lang];

    if (prefix) {
        prefix += " ";
    }

    return `${prefix}[${type} ${regionTag}]`;
};

const main = async (argv: any) => {
    const pack = tar.pack();

    await Promise.all(
        SNIPPET_LANG_VARIANTS.map(([lang, variant]) =>
            REQUESTS.map(async (snippetRequest: SnippetRequest) => {
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

                const snippet = [
                    regionTagComment("START", regionTag, lang),
                    code,
                    regionTagComment("END", regionTag, lang),
                ].join("\n");

                pack.entry(
                    {
                        name: `snippets/${regionTag}/${regionTag}.${Extensions[lang]}`,
                    },
                    snippet
                );
            })
        ).flat()
    );

    pack.finalize();
    pack.pipe(createWriteStream(argv.output));
};

main(argv);
