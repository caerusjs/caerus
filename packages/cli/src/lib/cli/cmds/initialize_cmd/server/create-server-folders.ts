import { createFolder } from '@caerusjs/helpers';

export const folders = [
  '/server/src/config',
  '/server/src/db',
  '/server/src/db/migrations',
  '/server/src/entities',
  '/server/src/features',
  '/server/src/lib',
  '/server/src/resolvers',
  '/server/src/support',
  '/server/src/types',
];

export const createServersideFolders = (name: string) => {
  folders.forEach((folder) => {
    createFolder(`${name}${folder}`);
  });
};
