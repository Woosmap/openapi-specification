

import yargs from "yargs";
import tar from "tar";
import tmp from "tmp";
import fs from "fs";
import path from "path";
import { glob } from "glob";

const argv = yargs(process.argv.slice(2)).options({
  archive: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = async (argv) => {
  const dir = tmp.dirSync();

  tar.x({
    file: argv.archive,
    sync: true,
    C: dir.name,
  });

  const generatedSchemaFiles = fs.readdirSync(
    path.join(dir.name, "documentation", "schemas")
  );

  const files = await glob(
    path.join(__dirname, "..", "specification", "schemas", "**", "*.yml")
  );

  files
    .map(
      (f) =>
        `woosmap_http_schema_${path
          .basename(f)
          .toLocaleLowerCase()
          .replace(".yml", ".md")}`
    )
    // remove the index files as those are not generated
    .filter((f) => f.indexOf("_index") === -1)
    .forEach((f) => {
      if (generatedSchemaFiles.indexOf(f) === -1) {
        throw `

Please update specification/schemas/_index.yml to generate ${f}.

`;
      }
    });
};

main(argv);
