import path from "path";
import { getFiles, filesFilter } from "./helpers";

function processLocalData() {
  const files = getFiles(path.resolve(__dirname, "../../data/localData"));
  console.log(files)
  const excelFiles = filesFilter(files, 'xlsx')
  console.log(excelFiles);
  // filter non-excel files
  // pass excel files into convertExcelToJSON
}

processLocalData();
