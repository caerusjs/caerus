import titleize from '../../../helpers/titleize'

export const createInput = (name: string) => {
  return (`import {
  InputType,
  Field,
  ID
} from 'type-graphql'
import { ${titleize(name)} } from 'entities/${name}.entity'

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
}`)
}