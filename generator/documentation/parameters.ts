import $RefParser from "@apidevtools/json-schema-ref-parser";
import clsx from "clsx";

import {createWriteStream, readFileSync} from "fs";
import yargs from "yargs";
import tar from "tar-stream";
import {OpenAPIV3} from "openapi-types";
import slugify from "slugify";
import prettier from "prettier";
import {mdProcessor, htmlProcessor, fromMarkdown} from "./processors";
import {
    root,
    paragraph,
    html as htmlNode,
    list,
    listItem,
} from "mdast-builder";
import {Node, Parent} from "unist";
import {feedbackLinks, deprecatedAsideNode} from "./helpers";

const argv = yargs(process.argv.slice(2)).options({
    output: {
        type: "string",
        demandOption: true,
    },
    spec: {
        type: "string",
        demandOption: true,
    },
}).argv;

const buildParameterListItem = (p: OpenAPIV3.ParameterObject): Parent => {
    const nodes: any = [];
     nodes.push(
    htmlNode(
      `<h3 class="${clsx("parameter-name", {
        "deprecated-item": p.deprecated,
        "hide-from-toc": p.deprecated,
      })}" id="${p.name.toLowerCase()}">${p.name}</h3>`
    )
  );

  if (p.deprecated) {
    nodes.push(deprecatedAsideNode(p.name));
  }

    if (p.description) {
        nodes.push(paragraph(fromMarkdown(p.description)));
    }

    return listItem(nodes);
};

const build = (
    key: string,
    regionTag: string,
    parameters: OpenAPIV3.ParameterObject[],
    options: { requiredHeading: string; optionalHeading: string } = {
        requiredHeading: "Required parameters",
        optionalHeading: "Optional parameters",
    }
): Node[] => {
    const nodes: any = [];

    parameters.sort(
        (a: OpenAPIV3.ParameterObject, b: OpenAPIV3.ParameterObject) => {
            if (a.required && b.required) {
                return a.name < b.name ? -1 : 1;
            } else if (a.required) {
                return -1;
            } else if (b.required) {
                return 1;
            } else {
                return a.name < b.name ? -1 : 1;
            }
        }
    );

    const required = parameters.filter(
        (p: OpenAPIV3.ParameterObject) => p.required
    );

    const optional = parameters.filter(
        (p: OpenAPIV3.ParameterObject) => !p.required
    );

    if (required.length) {
        nodes.push(
            htmlNode(
                `<h2 id="${options.requiredHeading.toLowerCase().replace(/ /g, "-")}">${
                    options.requiredHeading
                }</h2>`
            )
        );
    }
    nodes.push(list("unordered", required.map(buildParameterListItem)));

    if (optional.length) {
        nodes.push(
            htmlNode(
                `<h2 id="${options.optionalHeading.toLowerCase().replace(/ /g, "-")}">${
                    options.optionalHeading
                }</h2>`
            )
        );
    }

    nodes.push(list("unordered", optional.map(buildParameterListItem)));

    nodes.push(feedbackLinks(key, "parameters", regionTag));

    return nodes;
};
const main = async (argv: any) => {
    const spec = (await $RefParser.dereference(
        JSON.parse(readFileSync(argv.spec).toString()) as OpenAPIV3.Document
    )) as OpenAPIV3.Document;

    const pack = tar.pack();

    async function write(nodes: Node[], regionTag: string) {
        // mdast-builder's root() is typed as a loose unist Parent; the remark
        // stringifier wants an mdast Root (structurally identical here).
        const markdown = mdProcessor.stringify(root(nodes) as any);
        // write markdown file
        pack.entry(
            {
                name: `documentation/parameters/${regionTag}.md`,
            },
            `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${markdown}\n<!--- [END ${regionTag}] -->`
        );

        const html = await htmlProcessor.process(markdown);
        // write html file
        pack.entry(
            {
                name: `documentation/parameters/${regionTag}.html`,
            },
            await prettier.format(
                `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${html}\n<!--- [END ${regionTag}] -->`,
                {parser: "html"}
            )
        );
    }

    for (const key in spec.paths!) {
        const path = spec.paths![key];
        for (const method in path) {
            const {parameters} = path[method];

            if (parameters) {
                const regionTag = `woosmap_http_parameters_${slugify(key)
                    .toLowerCase()
                    .replace(/(v1|mapsapi|json)/g, "")}`;
                const nodes = build(key, regionTag, parameters);

                await write(nodes, regionTag);
            }
        }

    }

    pack.finalize();
    pack.pipe(createWriteStream(argv.output));
};

main(argv);
