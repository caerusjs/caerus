import { Argv } from 'yargs'

import { createFile } from '../helpers/create-file'

import { createFolders } from './initialize_cmd/client/create-folders'
import { createPackage } from './initialize_cmd/client/create-package'

export const command = 'init [name]'
export const describe = 'Initialize a new project [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFolders()
  createFile(`${process.cwd()}/client/`, 'package.json',  createPackage(argv.name))
}

