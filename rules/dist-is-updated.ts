import { options } from "yargs";
import tar from "tar";
import tmp from "tmp";
import { compareSync } from "dir-compare";
import fs from "fs";

const argv = options({
  archive: {
    type: "string",
    demandOption: true,
  },
  dist: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = (argv) => {
  const dir = tmp.dirSync();

  tar.x({
    file: argv.archive,
    sync: true,
    C: dir.name,
  });

  const res = compareSync("dist", dir.name, {
    compareContent: true,
    excludeFilter: "**/*-postman.json, **/merged-woosmap-openapi3.json",
    compareDate: false,
  });

  if (!res.same && res.diffSet) {
    const differences = res.diffSet
      .filter(diff => diff.state !== 'equal')
      .map(diff => {
        const diffInfo = {
          path1: diff.path1,
          path2: diff.path2,
          relativePath: diff.relativePath,
          name1: diff.name1,
          name2: diff.name2,
          state: diff.state,
          reason: diff.reason,
          contentDiff: null as string | null,
        };

        if (diff.state === 'distinct' && diff.type1 === 'file' && diff.type2 === 'file') {
          const file1 = fs.readFileSync(`${diff.path1}/${diff.name1}`, 'utf8');
          const file2 = fs.readFileSync(`${diff.path2}/${diff.name2}`, 'utf8');
          diffInfo.contentDiff = getContentDiff(file1, file2);
        }

        return diffInfo;
      });

    throw new Error(`
Differences found between the directories:

${JSON.stringify(differences, null, 2)}

Please run 'npm run build' to update the dist folder.
    `);
  }
};

const getContentDiff = (file1: string, file2: string): string => {
  const lines1 = file1.split('\n');
  const lines2 = file2.split('\n');
  const maxLength = Math.max(lines1.length, lines2.length);
  let diff = '';

  for (let i = 0; i < maxLength; i++) {
    if (lines1[i] !== lines2[i]) {
      diff += `Line ${i + 1}:\n`;
      diff += `File1: ${lines1[i] || ''}\n`;
      diff += `File2: ${lines2[i] || ''}\n\n`;
    }
  }

  return diff;
};

main(argv);