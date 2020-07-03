import { Argv } from 'yargs'

import { createFile } from '../../helpers/create-file'

import { createRoutes } from './views/create-routes'
import { createView } from './views/create-view'

export const command = 'views [name]'
export const describe = 'Generate views named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFile(`${process.cwd()}/client/src/routes/`, `${argv.name}.tsx`,  createRoutes(argv.name))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `new.tsx`,  createView(argv.name, 'New'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `edit.tsx`,  createView(argv.name, 'Edit'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `show.tsx`,  createView(argv.name, 'Show'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `index.tsx`,  createView(argv.name, 'Index'))
}
