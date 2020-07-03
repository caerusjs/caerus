import { Argv } from 'yargs'

import { createFile } from '../../helpers/create-file'

import { createResolver } from './resolver/create-resolver'
import { createTest } from './resolver/create-test'
import { createInput } from './resolver/create-input'
import { createArgs } from './resolver/create-args'

export const command = 'resolver [name]'
export const describe = 'Generate a resolver named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFile(`${process.cwd()}/server/src/resolvers/${argv.name}/`, `${argv.name}.resolver.ts`,  createResolver(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/${argv.name}/`, `${argv.name}.test.ts`,  createTest(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/${argv.name}/`, `${argv.name}.input.ts`,  createInput(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/${argv.name}/`, `${argv.name}.args.ts`,  createArgs(argv.name))
}
