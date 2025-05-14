import { options } from "yargs";
import { readFileSync } from "fs";

import axios from "axios";
import path from "path";

const argv = options({
  collection: {
    type: "string",
    demandOption: true,
  },
  file: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = async (argv: any) => {
  const data = JSON.parse(
    readFileSync(path.join(__dirname, "../../", argv.file), "utf8")
  ) as any;

  await axios.put(
    `https://api.getpostman.com/collections/${argv.collection}`,
    {
      collection: data,
    },
    { headers: { "X-API-KEY": process.env.POSTMAN_API_KEY! } }
  );
};

main(argv);
