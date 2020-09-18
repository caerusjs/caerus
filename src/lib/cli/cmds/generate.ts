#!/usr/bin/env ts-node
import { commandDir } from 'yargs';

export const command = ['generate <command>', 'g <command>'];
export const describe = 'Generate scaffolding';
export const builder = () => {
  return commandDir('generate_cmds', {
    extensions: process.env.NODE_ENV === 'development' ? ['ts'] : ['js'],
  });
};
