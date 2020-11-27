module.exports = {
  preset: 'jest-puppeteer',
  testRegex: 'features/.*\\.(test|steps)\\.ts?$',
  roots: ['<rootDir>../../'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testTimeout: process.env.TEST_TIMEOUT
    ? parseInt(process.env.TEST_TIMEOUT)
    : 30000,
};
