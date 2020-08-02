import titleize from '../../../helpers/titleize'

export const createEntity = (name: string) => {
  return (`import { 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
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

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date

  @Field()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date

  @Field()
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp with time zone', nullable: true })
  deletedAt?: Date
}`)
}