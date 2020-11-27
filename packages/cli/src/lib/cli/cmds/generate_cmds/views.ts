import { Argv } from 'yargs';

import { createFile } from '@caerusjs/server-helpers';

import { createRoutes } from './routes/create-routes';
import { createView } from './views/create-view';

export const command = 'views <name>';
export const describe = 'Generate views named <name>';
export const builder = {};
export const handler = (argv: Argv) => {
  createViews(argv.name);
};

export const createViews = (name: string) => {
  createFile(
    `${process.cwd()}/client/src/routes/`,
    `${name}.routes.tsx`,
    createRoutes(name),
  );
  createFile(
    `${process.cwd()}/client/src/views/${name}/`,
    `new.view.tsx`,
    createView(name, 'New'),
  );
  createFile(
    `${process.cwd()}/client/src/views/${name}/`,
    `edit.view.tsx`,
    createView(name, 'Edit'),
  );
  createFile(
    `${process.cwd()}/client/src/views/${name}/`,
    `show.view.tsx`,
    createView(name, 'Show'),
  );
  createFile(
    `${process.cwd()}/client/src/views/${name}/`,
    `index.view.tsx`,
    createView(name, 'Index'),
  );
};
