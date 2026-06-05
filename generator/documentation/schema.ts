
import { createWriteStream, readFileSync } from "fs";
import yargs from "yargs";
import tar from "tar-stream";
import { OpenAPIV3 } from "openapi-types";
import slugify from "slugify";
import prettier from "prettier";
import { build } from "./build";
import { mdProcessor, htmlProcessor } from "./processors";

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

const main = async (argv: any) => {
  const spec = JSON.parse(
    readFileSync(argv.spec).toString()
  ) as OpenAPIV3.Document;

  const pack = tar.pack();

  for (const key in spec.components!.schemas) {
    const schema = spec.components!.schemas[key];
    const regionTag = `woosmap_http_schema_${slugify(key).toLowerCase()}`;
    // build() composes mdast-builder nodes (typed as loose unist Parent); the
    // remark stringifier wants an mdast Root (structurally identical here).
    const markdown = mdProcessor.stringify((await build(schema, key, spec, regionTag)) as any);
    // write markdown file
    pack.entry(
      {
        name: `documentation/schemas/${regionTag}.md`,
      },
      await prettier.format(
        `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${markdown}\n<!--- [END ${regionTag}] -->`,
        { parser: "markdown" }
      )
    );

    const html = await htmlProcessor.process(markdown);
    // write html file
    pack.entry(
      {
        name: `documentation/schemas/${regionTag}.html`,
      },
      await prettier.format(
        `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${html}\n<!--- [END ${regionTag}] -->`,
        { parser: "html" }
      )
    );
  }
  pack.finalize();
  pack.pipe(createWriteStream(argv.output));
};

main(argv);
