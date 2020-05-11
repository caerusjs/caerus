import { Argv } from 'yargs'

export const command = 'get <source> [proxy]'

export const describe = 'make a get HTTP request'

export const builder = {
  banana: {
    default: 'cool'
  },
  batman: {
    default: 'sad'
  }
}

export const handler = function (argv: Argv) {
  console.log(argv)
  // do something with argv.
}