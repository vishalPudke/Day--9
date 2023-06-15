import { readFileSync } from "node:fs";
let filepath = "D:\Cdac\Cdac-2023-March\Module\WPT\WPT_MARCH";
let fileData = readFileSync(filepath);
console.log(fileData);
