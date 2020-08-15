import titleize from '../../../helpers/titleize'

export const createEntity = (name: string) => {
  return (`import { 
  Entity, 
  PrimaryGeneratedColumn, 
} from 'typeorm'
import {
  ObjectType,
  Field,
  ID,
} from 'type-graphql'

@ObjectType()
@Entity()
export class ${titleize(name)} {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string
}`)
}