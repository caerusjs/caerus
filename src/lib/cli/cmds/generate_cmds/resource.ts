import { Argv } from 'yargs'

import { createViews } from './views'
import { createResolverFiles } from './resolver'
import { createEntityFile } from './entity'

export const command = 'resource [name]'
export const describe = 'Generate resource named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
    // Create Views
    createViews(argv.name)

    // Create Organism
    createOrganism(argv.name)
  
    // Create a Resolver
    createResolverFiles(argv.name)
  
    // Create an Entity
    createEntityFile(argv.name)
}
