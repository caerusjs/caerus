module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>../../../'],
  modulePaths: ['<rootDir>../../../'],
  transform: {
    '^.+\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: [
    '<rootDir>../../../**.ts',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  testRegex: '.*\.(test)\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>../../../tsconfig.json'
    }
  },
  testTimeout: process.env.TEST_TIMEOUT ? parseInt(process.env.TEST_TIMEOUT) : 30000
};
