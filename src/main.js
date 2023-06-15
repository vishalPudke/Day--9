import { readFile } from "node:fs/promises";

async function main() {
  let filePath =
    "D:CdacCdac-2023-MarchModuleWPTWPT_MARCHDay-7_Backend ProgrammingDay-9package.json";
  let fileData = await readFile(filePath, { encoding: "utf-8" });
  console.log(fileData);
}
main();
