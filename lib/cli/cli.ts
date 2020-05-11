// #!/usr/bin/env ts-node
import { commandDir } from 'yargs'

// Implement a tsconfig to transpile it and then rename generate.js to generate.ts

// Command directory based on: https://github.com/yargs/yargs/blob/master/docs/advanced.md#example-command-hierarchy-using-commanddir
commandDir('cmds', {
    extensions: process.env.NODE_ENV === 'development' ? ['ts'] : ['js'],
  })
  .demandCommand()
  .help()
  .argv
