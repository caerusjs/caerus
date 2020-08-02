export const createClientPackage = (name: string) => {
  return (`{
  "name": "${name}-client",
  "version": "0.1.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@apollo/react-hooks": "^3.1.3",
    "@types/jest": "^25.1.2",
    "@types/lodash": "^4.14.157",
    "@types/pluralize": "^0.0.29",
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.0",
    "@types/react-router-dom": "^5.1.3",
    "@types/styled-jsx": "^2.2.8",
    "@types/yup": "^0.26.37",
    "apollo-boost": "^0.4.7",
    "apollo-cache-inmemory": "^1.6.5",
    "apollo-link": "^1.2.13",
    "apollo-link-batch-http": "^1.2.14",
    "apollo-link-error": "^1.1.12",
    "apollo-link-http": "^1.5.17",
    "formik": "^2.1.4",
    "graphql": "^14.6.0",
    "immutability-helper": "^3.0.2",
    "lodash": "^4.17.19",
    "pluralize": "^8.0.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-loading": "^2.0.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "typescript": "^3.9.3",
    "yum": "^0.1.1",
    "yup": "^0.28.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "coverage": "jest --coverage -c src/support/jest.config.js",
    "test": "jest -c src/support/jest.config.js",
    "test:watch": "jest --watch -c src/support/jest.config.js"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.19.0",
    "@typescript-eslint/parser": "^2.19.0",
    "@apollo/react-testing": "^3.1.3",
    "@testing-library/jest-dom": "^5.1.1",
    "@testing-library/react": "^9.4.0",
    "@testing-library/react-hooks": "^3.2.1",
    "@testing-library/user-event": "^7.1.2",
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-node": "^11.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-react": "^7.18.3",
    "eslint-plugin-react-hooks": "^2.3.0",
    "eslint-plugin-standard": "^4.0.1",
    "identity-obj-proxy": "^3.0.0",
    "jest": "24.9.0",
    "react-test-renderer": "^16.12.0",
    "ts-jest": "^24.3.0"
  }
}`)
}
