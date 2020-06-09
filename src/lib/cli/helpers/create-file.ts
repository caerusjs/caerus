import fs from 'fs'

export const createFile = (path: string, fileName: string, contents: string) => {
  // Caerus should be installed in the project root
  fs.mkdirSync(path, { recursive: true })
  fs.writeFileSync(path + fileName, contents)
  console.log(`Created file ${path}${fileName}`)
}