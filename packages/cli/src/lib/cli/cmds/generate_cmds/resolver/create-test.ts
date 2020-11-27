import { toTitleCase } from '@caerusjs/client-helpers';

export const createTest = (name: string) => {
  return `import dotenv from 'dotenv';
dotenv.config();
import { ApolloServerBase } from 'apollo-server-core';
import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';

import { 
  Get${toTitleCase(name)}Document, 
  Get${toTitleCase(name)}Query, 
  Get${toTitleCase(name)}sDocument, 
  Get${toTitleCase(name)}sQuery, 
  Add${toTitleCase(name)}Document, 
  Add${toTitleCase(name)}Mutation, 
  Update${toTitleCase(name)}Document, 
  Update${toTitleCase(name)}Mutation, 
  Remove${toTitleCase(name)}Document, 
  Remove${toTitleCase(name)}Mutation 
} from "types/graphql";

import { serverConfig } from 'config/apollo';
import { 
  connectDatabase, 
  disconnectDatabase 
} from 'support/database';

import { ${toTitleCase(name)} } from 'entities/${name}.entity';
import { getRepository } from 'typeorm';

let mutate: ApolloServerTestClient['mutate'];
let query: ApolloServerTestClient['query'];

test('get${toTitleCase(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${toTitleCase(name)}).save();

  // Act
  const res = await query({
    query: Get${toTitleCase(name)}Document, 
    variables: { 
      id: ${name}.id
    } 
  });
  const get${toTitleCase(name)}: Get${toTitleCase(name)}Query['get${toTitleCase(
    name,
  )}'] = res.data?.get${toTitleCase(name)};

  // Assert
  expect(get${toTitleCase(name)}).toHaveProperty('id', ${name}.id);
})

test('get${toTitleCase(name)}s', async () => {
  // Arrange
  await getRepository(${toTitleCase(name)}).save();
  await getRepository(${toTitleCase(name)}).save();

  // Act
  const res = await query({
    query: Get${toTitleCase(name)}sDocument
  });
  const get${toTitleCase(name)}s: Get${toTitleCase(
    name,
  )}sQuery['get${toTitleCase(name)}s'] = res.data?.get${toTitleCase(name)}s;

  // Assert
  expect(get${toTitleCase(name)}s).toHaveLength(2);
})

test('add${toTitleCase(name)}', async () => {
  // Act
  const res = await mutate({ 
    mutation: Add${toTitleCase(name)}Document, 
    variables: {
      ${name}: {
        
      }
    } 
  });

  const add${toTitleCase(name)}: Add${toTitleCase(
    name,
  )}Mutation['add${toTitleCase(name)}'] = res.data?.add${toTitleCase(name)};

  // Assert
  expect(add${toTitleCase(name)}).toHaveProperty('prop', 'value');
})

test('update${toTitleCase(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${toTitleCase(name)}).save();

  // Act
  const res = await mutate({ 
    mutation: Update${toTitleCase(name)}Document, 
    variables: { 
      ${name}: {
        id: ${name}.id
      }
    } 
  });

  const update${toTitleCase(name)}: Update${toTitleCase(
    name,
  )}Mutation['update${toTitleCase(name)}'] = res.data?.update${toTitleCase(
    name,
  )};

  // Assert
  expect(update${toTitleCase(name)}).toHaveProperty('prop', 'value');
})

test('remove${toTitleCase(name)}', async () => {
  // Arrange
  const ${name} = await getRepository(${toTitleCase(name)}).save();

  // Act
  const res = await mutate({ 
    mutation: Remove${toTitleCase(name)}Document, 
    variables: { 
      ${name}: {
        id: ${name}.id
      }
    } 
  });

  const remove${toTitleCase(name)}: Remove${toTitleCase(
    name,
  )}Mutation['remove${toTitleCase(name)}'] = res.data?.remove${toTitleCase(
    name,
  )};

  // Assert
  expect(remove${toTitleCase(name)}).toHaveProperty('id', ${name}.id);
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
