module.exports = {
// The root of your source code, typically /src
// `<rootDir>` is a token Jest substitutes
roots: ['../'],
modulePaths: ['../'],
collectCoverageFrom: [
  '**/*.ts',
  '!**/node_modules/**',
  '!**/vendor/**'
],

// Jest transformations -- this adds support for TypeScript
// using ts-jest
transform: {
  "^.+\.tsx?$": "ts-jest"
},

// Runs special logic, such as cleaning up components
// when using React Testing Library and adds special
// extended assertions to Jest
setupFilesAfterEnv: [
  "@testing-library/jest-dom/extend-expect"
],

// Test spec file resolution pattern
// Matches parent folder `__tests__` and filename
// should contain `test` or `spec`.
testRegex: ".*\.test\.tsx?$",

// Module file extensions for importing
moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
globals: {
  'ts-jest': {
    tsConfig: 'tsconfig.json'
  }
},
moduleNameMapper: {
  "\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  "\.(css|less)$": "identity-obj-proxy"
}
}