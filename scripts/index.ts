import fs from "fs";
import path from "path";
import xlsx from "node-xlsx";
import { getFileNameFromPath } from "./helpers/getFileNameFromPath";

const filePath = process.argv[2];

async function readData(filePath: string, destination?: string) {
  const originalName = getFileNameFromPath(filePath);
  console.log(originalName);
  let workSheetsFromFile = "";
  try {
    workSheetsFromFile = xlsx.parse(`${filePath}`);
    fs.writeFile(
      destination? destination : path.resolve(__dirname, `../../data/${originalName}.json`), // this path resolves from within the ./dist directory that's created at compilation time
      JSON.stringify(workSheetsFromFile),
      () => {
        console.log(`finished writing`)
      }
    );
  } catch (error) {
    console.error(error);
  }
}
readData(filePath);
