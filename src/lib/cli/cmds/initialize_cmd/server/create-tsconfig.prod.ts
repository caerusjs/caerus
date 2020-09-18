export const createTsconfigProd = () => {
  return `{
  "extends": "./tsconfig.json",
  "exclude": [
    "./**/node_modules",
    "./**/*.test.ts",
    "./**/*.steps.ts",
    "./**/support"
  ]
}
`;
};
