import { Argv } from 'yargs'

import { createFile } from '../../helpers/create-file'
import titleize from '../../helpers/titleize'

export const command = 'init [name]'
export const describe = 'Initialize a new project [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  // createFile(`${process.cwd()}/server/src/entities/`, `${argv.name}.ts`,  createEntity(argv.name))
}

