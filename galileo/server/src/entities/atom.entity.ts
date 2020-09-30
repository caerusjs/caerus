import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Atom {
  @Field({ nullable: true })
  href?: string;
}
