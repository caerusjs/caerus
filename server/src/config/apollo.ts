import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

// Configuration
export const serverConfig = async () => {
  const extension = process.env.NODE_ENV === 'production' ? 'js' : 'ts';

  return await buildSchema({
    resolvers: [`${__dirname}/../resolvers/**/*.resolver.${extension}`]
  });
};