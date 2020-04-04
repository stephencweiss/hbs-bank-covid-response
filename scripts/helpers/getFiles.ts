const fs = require("fs");

export function getFiles(directoryPath) {
  return fs.readdirSync(directoryPath, { withFileTypes: true });
}
