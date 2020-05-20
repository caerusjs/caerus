import { Argv } from 'yargs'
import { titleCase } from 'title-case'
import fs from 'fs'

export const command = 'entity [name]'
export const describe = 'Generate an entity named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  // Caerus should be installed in the project root
  fs.writeFileSync(`${process.cwd()}/server/src/entities/${argv.name}.ts`, createEntity(argv.name))
}

const createEntity = (name: string) => {
  return (
`import { 
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
export class ${titleCase(name).replace('-', '')} {
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
}`
)
}