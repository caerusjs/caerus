import { Argv } from 'yargs'

import { createViews } from './views'
import { createResolverFiles } from './resolver'
import { createEntityFile } from './entity'
import { createOrganism, actions } from './organism/create-organism'
import { createFile } from 'lib/cli/helpers/create-file'

export const command = 'resource [name]'
export const describe = 'Generate resource named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  // Create Views
  createViews(argv.name)

  // Create Organisms
  actions.forEach(action => {
    createFile(`${process.cwd()}/client/src/organisms/${action}${argv.name}/`, `index.ts`,  createOrganism(argv.name, action))
  })
  
  // Create Hooks
  actions.forEach(action => {
    createHooks(argv.name, action)
  })

  // Create Documents
  actions.forEach(action => {
    createDocuments(argv.name, action)
  })

  // Create a Resolver
  createResolverFiles(argv.name)

  // Create an Entity
  createEntityFile(argv.name)
}
