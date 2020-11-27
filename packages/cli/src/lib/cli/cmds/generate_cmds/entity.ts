import { Argv } from 'yargs';

import { createFile } from '@caerusjs/server-helpers';
import { createEntity } from './entity/create-entity';

export const command = 'entity <name>';
export const describe = 'Generate an entity named <name>';
export const builder = {};
export const handler = (argv: Argv) => {
  createEntityFile(argv.name);
};

export const createEntityFile = (name: string) => {
  createFile(
    `${process.cwd()}/server/src/entities/`,
    `${name}.entity.ts`,
    createEntity(name),
  );
};
