export const createExampleEntity = () => {
  return `import {
  ObjectType,
  Field
} from 'type-graphql';

@ObjectType()
export class Example {
  @Field({ nullable: true })
  content?: string;
};
  `;
};
