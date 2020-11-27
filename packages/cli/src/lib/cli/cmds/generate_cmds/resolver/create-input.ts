import { toTitleCase } from '@caerusjs/client-helpers';

export const createInput = (name: string) => {
  return `import {
  InputType,
  Field,
  ID
} from 'type-graphql';
import { ${toTitleCase(name)} } from 'entities/${name}.entity';

@InputType()
export class Add${toTitleCase(name)}Input implements Partial<${toTitleCase(
    name,
  )}> {
};

@InputType()
export class Update${toTitleCase(name)}Input implements Partial<${toTitleCase(
    name,
  )}> {
  @Field(type => ID)
  id: string;
};

@InputType()
export class Remove${toTitleCase(name)}Input implements Partial<${toTitleCase(
    name,
  )}> {
  @Field(type => ID)
  id: string;
};`;
};
