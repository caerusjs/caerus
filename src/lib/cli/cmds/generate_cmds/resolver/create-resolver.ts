import titleize from '../../../helpers/titleize'
import camelize from '../../../helpers/camelize'

export const createResolver = (name: string) => {
  return (`import {
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
  async add${titleize(name)}(@Arg('${camelize(name)}') ${camelize(name)}: Add${titleize(name)}Input): Promise<${titleize(name)}> {
  }
  
  @Mutation(returns => ${titleize(name)})
  async update${titleize(name)}(@Arg('${camelize(name)}') ${camelize(name)}: Update${titleize(name)}Input): Promise<${titleize(name)}> {
  }

  @Mutation(returns => ${titleize(name)})
  async removeVideo(@Arg('${camelize(name)}') ${camelize(name)}: Remove${titleize(name)}Input): Promise<${titleize(name)}> {
  }
}`)
}