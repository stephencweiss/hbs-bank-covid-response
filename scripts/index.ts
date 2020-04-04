import fs from "fs";
import path from "path";
import { getFiles, getFileNameFromPath } from "./helpers";

function processLocalData() {
  const files = getFiles(path.resolve(__dirname, "../../data/localData"));
  console.log(files);
  // get all files from directory (i.e. data/localData)
  // filter non-excel files
  // pass excel files into convertExcelToJSON
}

processLocalData();
