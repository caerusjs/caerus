import fs from 'fs'

export const createFolder = (folderPath: string) => {
  // Caerus should be installed in the project root
  fs.mkdirSync(folderPath, { recursive: true })
  console.log(`Created folder ${folderPath}`)
}
