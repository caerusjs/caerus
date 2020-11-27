import fs from 'fs';
import { createFolder } from './createFolder';

export const createFile = (
  path: string,
  fileName: string,
  contents: string,
) => {
  // Caerus should be installed in the project root
  createFolder(path);
  fs.writeFileSync(`${path}${fileName}`, contents);
  console.log(`Created file ${path}${fileName}`);
};
