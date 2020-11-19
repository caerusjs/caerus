import dotenv from 'dotenv';
dotenv.config();
import { ApolloServerBase } from 'apollo-server-core';
import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing';

import { GetAtomDocument, GetAtomQuery } from 'types/graphql';

import { serverConfig } from 'config/apollo';
import { connectDatabase, disconnectDatabase } from 'support/database';

import { Atom } from 'entities/atom.entity';
import { getRepository } from 'typeorm';

let mutate: ApolloServerTestClient['mutate'];
let query: ApolloServerTestClient['query'];

test('getAtom', async () => {
  // Arrange
  const atom = await getRepository(Atom).save();

  // Act
  const res = await query({
    query: GetAtomDocument,
    variables: {
      id: atom.id,
    },
  });
  const getAtom: GetAtomQuery['getAtom'] = res.data?.getAtom;

  // Assert
  expect(getAtom).toHaveProperty('id', atom.id);
});

beforeEach(async () => {
  const schema = await serverConfig();
  const server = new ApolloServerBase({ schema });
  const testClient = createTestClient(server);

  mutate = testClient.mutate;
  query = testClient.query;

  return connectDatabase();
});

afterEach(async () => {
  await disconnectDatabase();
});
