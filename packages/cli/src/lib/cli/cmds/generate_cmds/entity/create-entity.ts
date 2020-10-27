import { toTitleCase } from '@caerusjs/helpers';

export const createEntity = (name: string) => {
  return `import { 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, 
} from 'typeorm'
import {
  ObjectType,
  Field,
  ID,
} from 'type-graphql';

@ObjectType()
@Entity()
export class ${toTitleCase(name)} {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date;
  
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}`;
};
