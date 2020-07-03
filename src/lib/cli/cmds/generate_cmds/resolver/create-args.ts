import titleize from '../../../helpers/titleize'

export const createArgs = (name: string) => {
  return (`import {
  ArgsType,
  Field,
  ID
} from 'type-graphql'

@ArgsType()
export class Get${titleize(name)}Args {
  @Field(type => ID)
  id: string
}
`)
}