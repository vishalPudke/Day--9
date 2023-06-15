import { writeFile } from "node:fs/promises";

async function main() {
  try {
    let filePath =
      "D:Cdac/Cdac-2023-March/ModuleWPTWPT_MARCH/Day-7_Backend Programming/Day-9/vishal.txt";

    let fileData = "Asynchronulsy sakhajksa sajhdkjs cusns vishal ;epraksahs ";
    await writeFile(filePath, fileData);
    console.log(fileData);
  } catch (e) {
    console.log("Exception Ocurred :: ", e.message);
  }
}
main();
