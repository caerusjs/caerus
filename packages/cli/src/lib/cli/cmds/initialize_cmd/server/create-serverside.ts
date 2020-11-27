import { createServersideFolders } from './create-server-folders';
import { createApollo } from './config/create-apollo';
import { createAssets } from './config/create-assets';
import { createCors } from './config/create-cors';
import { createConfigIndex } from './config/create-config-index';
import { createRoutes } from './config/create-routes';
import { createDbConfig } from './create-db-config';
import { createNodemon } from './create-nodemon';
import { createTsconfig } from './create-tsconfig';
import { createTsconfigProd } from './create-tsconfig.prod';
import { createSeeds } from './db/create-seeds';
import { createDatabase } from './support/create-database';
import { createJestIntegration } from './support/jest/create-jest-integration';
import { createPuppeteerConfig } from './support/puppeteer/create-puppeteer-config';
import { createServer } from './create-server';
import { createServerPackage } from './create-server-package';
import { createExampleResolver } from './resolvers/example/create-example-resolver';
import { createExampleEntity } from './entities/create-example-entity';
import { createServerEnv } from './create-server-env';
import { createJestConfig } from './support/jest/create-jest-config';
import { createFile } from '@caerusjs/server-helpers';

export const createServerside = (name: string) => {
  createServersideFolders(name);

  // - root
  createFile(`${name}/server/`, 'ormconfig.js', createDbConfig(name));
  createFile(`${name}/server/`, 'nodemon.json', createNodemon());
  createFile(`${name}/server/`, 'package.json', createServerPackage(name));
  createFile(`${name}/server/`, 'tsconfig.json', createTsconfig());
  createFile(`${name}/server/`, 'tsconfig.prod.json', createTsconfigProd());
  createFile(`${name}/server/`, '.env', createServerEnv());

  // - src
  createFile(`${name}/server/src/`, 'server.ts', createServer());

  // - config
  createFile(`${name}/server/src/config/`, 'apollo.ts', createApollo());
  createFile(`${name}/server/src/config/`, 'assets.ts', createAssets());
  createFile(`${name}/server/src/config/`, 'cors.ts', createCors());
  createFile(`${name}/server/src/config/`, 'index.ts', createConfigIndex());
  createFile(`${name}/server/src/config/`, 'routes.ts', createRoutes());

  // - db
  createFile(`${name}/server/src/db/`, 'seeds.ts', createSeeds());

  // - support
  createFile(`${name}/server/src/support/`, 'database.ts', createDatabase());
  createFile(
    `${name}/server/src/support/jest/`,
    'jest.config.js',
    createJestConfig(),
  );
  createFile(
    `${name}/server/src/support/jest/`,
    'jest.integration.config.js',
    createJestIntegration(),
  );
  createFile(
    `${name}/server/src/support/puppeteer/`,
    'puppeteer.config.js',
    createPuppeteerConfig(),
  );

  // - resolvers
  createFile(
    `${name}/server/src/resolvers/example/`,
    'example.resolver.ts',
    createExampleResolver(),
  );

  // - entities
  createFile(
    `${name}/server/src/entities/`,
    'example.entity.ts',
    createExampleEntity(),
  );
};
