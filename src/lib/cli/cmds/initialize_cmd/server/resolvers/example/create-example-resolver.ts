export const createExampleResolver = () => {
  return `import {
  Resolver,
  Query
} from 'type-graphql';
import { Example } from 'entities/example.entity';

@Resolver()
export class ImageResolver {
  @Query(returns => Example)
  getExample(): Example {
    return { content: "Welcome to Caerus!" };
  };
};
  `;
};
