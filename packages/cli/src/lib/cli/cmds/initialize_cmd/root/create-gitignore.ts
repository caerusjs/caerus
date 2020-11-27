export const createGitIgnore = () => {
  return `**/node_modules
**/built
**/build
**/dist
**/.env
**/.env.production
**/coverage
**/tmp
**/temp
**/report`;
};
