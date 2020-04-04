type FilePath = string

/**
 * Assumes that a file path includes one file and that file name does not include a `.` in the file name
 */
export function getFileNameFromPath(filePath:FilePath){
    return (filePath.split('/')[filePath.split('/').length - 1]).split('.')[0]
  }