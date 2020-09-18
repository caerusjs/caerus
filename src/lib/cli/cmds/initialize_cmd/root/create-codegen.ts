export const createCodegen = () => {
  return `overwrite: true
schema: 'http://localhost:4000/graphql'
documents: 'client/src/**/*.graphql'
generates:
  client/src/types/graphql.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
    config:
      withHooks: false
      withHOC: false
      withComponent: false
  server/src/types/graphql.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
    config:
      withHooks: false
      withHOC: false
      withComponent: false
  server/src/graphql.schema.json:
    plugins:
      - 'introspection'
config:
  useIndexSignature: true
`;
};
