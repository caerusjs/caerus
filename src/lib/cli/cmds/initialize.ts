import { Argv } from 'yargs'

import { createFile } from '../helpers/create-file'

import { createGitIgnore } from './initialize_cmd/root/create-gitignore'
import { createCodegen } from './initialize_cmd/root/create-codegen'
import { createPackage } from './initialize_cmd/root/create-package'
import { createProcfile } from './initialize_cmd/root/create-procfile'

import { createClient } from './initialize_cmd/client/create-clientside'
import { createServerside } from './initialize_cmd/server/create-serverside'


export const command = 'init <name>'
export const describe = 'Initialize a new project <name>'
export const builder = {}
export const handler = (argv: Argv) => {
  // Root
  createFile(`${argv.name}/`, '.gitignore',  createGitIgnore())
  createFile(`${argv.name}/`, 'codegen.yml',  createCodegen())
  createFile(`${argv.name}/`, 'package.json',  createPackage(argv.name))
  createFile(`${argv.name}/`, 'Procfile.dev',  createProcfile())

  // Clientside
  createClient(argv.name)

  // Serverside
  createServerside(argv.name)
}
