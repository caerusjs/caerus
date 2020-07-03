import fs from 'fs'

export const createFolder = (path: string) => {
  // Caerus should be installed in the project root
  fs.mkdirSync(path, { recursive: true })
  console.log(`Created folder ${path}`)
}
