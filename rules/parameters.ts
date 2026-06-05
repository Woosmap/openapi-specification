

import { readFileSync, writeFileSync } from "fs";

import { glob } from "glob";
import yargs from "yargs";
import path from "path";

const argv = yargs(process.argv.slice(2)).options({
  output: {
    demandOption: true,
    string: true,
  },
}).argv;

const main = async (argv) => {
  const files = await glob(
    path.join("specification", "parameters", "**", "*.yml")
  );

  const header = "# WARNING: This file is automatically updated as part of `npm run build`."

  writeFileSync(
    argv.output,
    [
      header,
      files
        .filter((file) => !file.endsWith("_index.yml"))
        .map((file) => file.replace("specification/parameters/", ""))
        .map((file) => {
          return `${file
            .replace("/", "_")
            .replace(".yml", "")
            .toLowerCase()}:\n  $ref: "./${file}"`;
        })
        .join("\n"),
    ].join("\n\n")
  );
};

main(argv as any);
