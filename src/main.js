import { readFileSync, writeFileSync } from "node:fs";
let filepath = "D:CdacCdac-2023-MarchModuleWPTWPT_MARCH\vishal.txt";

let data = "learn how to create a file Thank you Santosh sir and CDAC family";
let fileData = writeFileSync(filepath, data);
console.log("Write Success");
