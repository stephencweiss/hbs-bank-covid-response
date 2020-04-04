import path from "path";
import { getFiles, filesFilter } from "./helpers";

const LOCAL_DATA = process.env.local_data || path.resolve(__dirname, "../../data/localData")

function processLocalData() {
  const files = getFiles(LOCAL_DATA);
  console.log(files)
  const excelFiles = filesFilter(files, 'xlsx')
  console.log(excelFiles);
  // filter non-excel files
  // pass excel files into convertExcelToJSON
}

processLocalData();
