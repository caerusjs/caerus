import { titleize } from '@caerusjs/helpers';

export const createTest = (name: string) => {
  return `import dotenv from 'dotenv';
dotenv.config();
import { ApolloServerBase } from 'apollo-server-core';
import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';

import { 
  Get${titleize(name)}Document, 
  Get${titleize(name)}Query, 
  Get${titleize(name)}sDocument, 
  Get${titleize(name)}sQuery, 
  Add${titleize(name)}Document, 
  Add${titleize(name)}Mutation, 
  Update${titleize(name)}Document, 
  Update${titleize(name)}Mutation, 
  Remove${titleize(name)}Document, 
  Remove${titleize(name)}Mutation 
} from "types/graphql";

import { serverConfig } from 'config/apollo';
import { 
  connectDatabase, 
  disconnectDatabase 
} from 'support/database';

import { ${titleize(name)} } from 'entities/${name}.entity';
import { getRepository } from 'typeorm';

let mutate: ApolloServerTestClient['mutate'];
let query: ApolloServerTestClient['query'];

test('get${titleize(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${titleize(name)}).save();

  // Act
  const res = await query({
    query: Get${titleize(name)}Document, 
    variables: { 
      id: ${name}.id
    } 
  });
  const get${titleize(name)}: Get${titleize(name)}Query['get${titleize(
    name,
  )}'] = res.data?.get${titleize(name)};

  // Assert
  expect(get${titleize(name)}).toHaveProperty('id', ${name}.id);
})

test('get${titleize(name)}s', async () => {
  // Arrange
  await getRepository(${titleize(name)}).save();
  await getRepository(${titleize(name)}).save();

  // Act
  const res = await query({
    query: Get${titleize(name)}sDocument
  });
  const get${titleize(name)}s: Get${titleize(name)}sQuery['get${titleize(
    name,
  )}s'] = res.data?.get${titleize(name)}s;

  // Assert
  expect(get${titleize(name)}s).toHaveLength(2);
})

test('add${titleize(name)}', async () => {
  // Act
  const res = await mutate({ 
    mutation: Add${titleize(name)}Document, 
    variables: {
      ${name}: {
        
      }
    } 
  });

  const add${titleize(name)}: Add${titleize(name)}Mutation['add${titleize(
    name,
  )}'] = res.data?.add${titleize(name)};

  // Assert
  expect(add${titleize(name)}).toHaveProperty('prop', 'value');
})

test('update${titleize(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${titleize(name)}).save();

  // Act
  const res = await mutate({ 
    mutation: Update${titleize(name)}Document, 
    variables: { 
      ${name}: {
        id: ${name}.id
      }
    } 
  });

  const update${titleize(name)}: Update${titleize(
    name,
  )}Mutation['update${titleize(name)}'] = res.data?.update${titleize(name)};

  // Assert
  expect(update${titleize(name)}).toHaveProperty('prop', 'value');
})

test('remove${titleize(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${titleize(name)}).save();

  // Act
  const res = await mutate({ 
    mutation: Remove${titleize(name)}Document, 
    variables: { 
      ${name}: {
        id: ${name}.id
      }
    } 
  });

  const remove${titleize(name)}: Remove${titleize(
    name,
  )}Mutation['remove${titleize(name)}'] = res.data?.remove${titleize(name)};

  // Assert
  expect(remove${titleize(name)}).toHaveProperty('id', ${name}.id);
})

beforeEach(async () => {
  const schema = await serverConfig();
  const server = new ApolloServerBase({ schema });
  const testClient = createTestClient(server);

  mutate = testClient.mutate;
  query = testClient.query;

  return connectDatabase();
})

afterEach(async () => {
  await disconnectDatabase();
})`;
};
