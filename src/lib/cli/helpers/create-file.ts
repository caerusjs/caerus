import fs from 'fs'
import { createFolder } from './create-folder'

export const createFile = (path: string, fileName: string, contents: string) => {
  // Caerus should be installed in the project root
  createFolder(path)
  console.log(`${process.cwd()}/${path}${fileName}`)
  fs.writeFileSync(`${process.cwd()}/${path}${fileName}`, contents)
  console.log(`Created file ${process.cwd()}/${path}${fileName}`)
}