const fs = require("fs");

export function getFiles(directoryPath) {
  const files = fs.readdirSync(directoryPath, { withFileTypes: true });
  return files.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
  }, []);
}
