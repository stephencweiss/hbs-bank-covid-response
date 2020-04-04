export function filesFilter(files: string[], fileExtension: string){
    return files.filter(file => file.split('.')[1] === fileExtension)
}
