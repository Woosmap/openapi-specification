

import yargs from "yargs";
import { OpenAPIV3 } from "openapi-types";
import fs from "fs";

const argv = yargs(process.argv.slice(2)).options({
  spec: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = (argv) => {
  const spec = JSON.parse(
    fs.readFileSync(argv.spec).toString()
  ) as OpenAPIV3.Document;

  const schemas = spec.components!.schemas!;
  
  Object.keys(schemas).forEach((key) => {
    const schema = schemas[key] as OpenAPIV3.SchemaObject;
    if (schema.title !== key) {
      throw `Schema Title - Expected: ${key}, Actual: ${schema.title}`
    }

    if (!schema.title.match(/^([A-Z][a-zA-Z0-9]*)$/)) {
      throw `Schema Title - Expected PascalCase format, Actual: ${schema.title}`
    }

  });
};

main(argv);
