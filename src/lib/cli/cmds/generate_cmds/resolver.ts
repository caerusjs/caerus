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
  createResolverFiles(argv.name)
}

export const createResolverFiles = (name: string) => {
  createFile(`${process.cwd()}/server/src/resolvers/${name}/`, `${name}.resolver.ts`,  createResolver(name))
  createFile(`${process.cwd()}/server/src/resolvers/${name}/`, `${name}.test.ts`,  createTest(name))
  createFile(`${process.cwd()}/server/src/resolvers/${name}/`, `${name}.input.ts`,  createInput(name))
  createFile(`${process.cwd()}/server/src/resolvers/${name}/`, `${name}.args.ts`,  createArgs(name))
}