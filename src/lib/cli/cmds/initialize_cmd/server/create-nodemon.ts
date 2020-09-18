export const createNodemon = () => {
  return `{
"verbose": true,
"watch": [
  "src"
],
"ext": "ts",
"ignore": [
  "src/**/*.test.ts",
  "src/**/*.steps.ts"
],
"exec": "TS_NODE_PROJECT='./tsconfig.json' ts-node -r tsconfig-paths/register src/server.ts",
"port": 4000
}`;
};
