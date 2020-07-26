import fs from 'fs'
import path from 'path'

export const createFolder = (folderPath: string) => {
  // Caerus should be installed in the project root
  console.log("./ = %s", path.resolve("./"));
  fs.mkdirSync(`${process.cwd()}/${folderPath}`, { recursive: true })
  console.log(`Created folder ${process.cwd()}/${folderPath}`)
}
