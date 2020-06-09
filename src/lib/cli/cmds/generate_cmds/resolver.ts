import { Argv } from 'yargs'
import { createFile } from '../../helpers/create-file'
import titleize from '../../helpers/titleize'

export const command = 'resolver [name]'
export const describe = 'Generate a resolver named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFile(`${process.cwd()}/server/src/resolvers/`, `${argv.name}.resolver.ts`,  createResolver(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/`, `${argv.name}.test.ts`,  createTest(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/`, `${argv.name}.input.ts`,  createInput(argv.name))
  createFile(`${process.cwd()}/server/src/resolvers/`, `${argv.name}.args.ts`,  createArgs(argv.name))
}

const createResolver = (name: string) => {
  return (
`import {
  Args,
  Arg,
  Resolver,
  Mutation,
  Query
} from 'type-graphql'

import { ${titleize(name)} } from '../../entities/${name}.entity'
import { Get${titleize(name)}Args } from './${name}.args'
import { Add${titleize(name)}Input, Update${titleize(name)}Input, Remove${titleize(name)}Input } from './${name}.input'

@Resolver(${titleize(name)})
export class ${titleize(name)}Resolver {
  @Query(returns => ${titleize(name)})
  async get${titleize(name)}(@Args() { id }: Get${titleize(name)}Args): Promise<${titleize(name)}> {
  }

  @Query(returns => ${titleize(name)}[])
  async get${titleize(name)}s(): Promise<${titleize(name)}[]> {
  }
  
  @Mutation(returns => ${titleize(name)})
  async add${titleize(name)}(@Arg('${name.toLowerCase()}') ${name.toLowerCase()}: Add${titleize(name)}Input): Promise<${titleize(name)}> {
  }
  
  @Mutation(returns => ${titleize(name)})
  async update${titleize(name)}(@Arg('${name.toLowerCase()}') ${name.toLowerCase()}: Update${titleize(name)}Input): Promise<${titleize(name)}> {
  }

  @Mutation(returns => ${titleize(name)})
  async removeVideo(@Arg('${name.toLowerCase()}') ${name.toLowerCase()}: Remove${titleize(name)}Input): Promise<${titleize(name)}> {
  }
}`
)
}

const createTest = (name: string) => {
  return (
`
test('get${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('get${titleize(name)}s', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('add${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('update${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('remove${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})`
)
}

const createInput = (name: string) => {
  return (
`
import {
  InputType,
  Field,
  ID
} from 'type-graphql'
import { ${titleize(name)} } from '../../entities/${name}.entity'

@InputType()
export class Add${titleize(name)}Input implements Partial<${titleize(name)}> {
}

@InputType()
export class Update${titleize(name)}Input implements Partial<${titleize(name)}> {
  @Field(type => ID)
  id: string
}

@InputType()
export class Remove${titleize(name)}Input implements Partial<${titleize(name)}> {
  @Field(type => ID)
  id: string
  
  @Field()
  deletedAt: Date
}`
  )
}

const createArgs = (name: string) => {
  return (
`
import {
  ArgsType,
  Field,
  ID
} from 'type-graphql'

@ArgsType()
export class Get${titleize(name)}Args {
  @Field(type => ID)
  id: string
}
`
  )
}