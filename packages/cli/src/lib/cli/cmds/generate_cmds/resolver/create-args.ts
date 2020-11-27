import { toTitleCase } from '@caerusjs/client-helpers';

export const createArgs = (name: string) => {
  return `import {
  ArgsType,
  Field,
  ID
} from 'type-graphql';

@ArgsType()
export class Get${toTitleCase(name)}Args {
  @Field(type => ID)
  id: string;
};
`;
};
