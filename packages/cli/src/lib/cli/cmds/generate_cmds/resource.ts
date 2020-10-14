import { Argv } from 'yargs';

import { createViews } from './views';
import { createResolverFiles } from './resolver';
import { createEntityFile } from './entity';
import { createOrganism } from './organism/create-organism';
import { createFile } from '@caerusjs/helpers';
import { createFormFields } from './molecule/create-form-fields';
import { createDocument } from './organism/create-document';
import { createHook } from './organism/create-hook';
import { createResourceItem } from './molecule/create-resource-item';
import { createCache } from './resource/create-cache';

export const command = 'resource <name>';
export const describe = 'Generate resource named <name>';
export const builder = {};
export const handler = (argv: Argv) => {
  // Create cache
  createFile(
    `${process.cwd()}/client/src/cache/`,
    `${argv.name}s.cache.ts`,
    createCache(argv.name, 'AddRemove'),
  );

  // Create Views
  createViews(argv.name);

  // Create Organisms
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}s/`,
    `index.tsx`,
    createOrganism(argv.name, 'GetAll'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}/`,
    `index.tsx`,
    createOrganism(argv.name, 'Get'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/add-${argv.name}/`,
    `index.tsx`,
    createOrganism(argv.name, 'Add'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/update-${argv.name}/`,
    `index.tsx`,
    createOrganism(argv.name, 'Update'),
  );

  // Create Molecules
  createFile(
    `${process.cwd()}/client/src/molecules/${argv.name}-form-fields/`,
    `index.tsx`,
    createFormFields(argv.name),
  );
  createFile(
    `${process.cwd()}/client/src/molecules/${argv.name}-item/`,
    `index.tsx`,
    createResourceItem(argv.name),
  );

  // Create Hooks
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}s/`,
    `use-get-${argv.name}s.ts`,
    createHook(argv.name, 'GetAll'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}/`,
    `use-get-${argv.name}.ts`,
    createHook(argv.name, 'Get'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/add-${argv.name}/`,
    `use-add-${argv.name}.ts`,
    createHook(argv.name, 'Add'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/update-${argv.name}/`,
    `use-update-${argv.name}.ts`,
    createHook(argv.name, 'Update'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}s/`,
    `use-remove-${argv.name}.ts`,
    createHook(argv.name, 'Remove'),
  );

  // Create Documents
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}s/`,
    `get-${argv.name}s.graphql`,
    createDocument(argv.name, 'GetAll'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}/`,
    `get-${argv.name}.graphql`,
    createDocument(argv.name, 'Get'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/add-${argv.name}/`,
    `add-${argv.name}.graphql`,
    createDocument(argv.name, 'Add'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/update-${argv.name}/`,
    `update-${argv.name}.graphql`,
    createDocument(argv.name, 'Update'),
  );
  createFile(
    `${process.cwd()}/client/src/organisms/get-${argv.name}s/`,
    `remove-${argv.name}.graphql`,
    createDocument(argv.name, 'Remove'),
  );

  // Create a Resolver
  createResolverFiles(argv.name);

  // Create an Entity
  createEntityFile(argv.name);
};
