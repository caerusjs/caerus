export const createProcfile = () => {
  return (`server: PORT=4000 yarn --cwd server dev
  web: PORT=3000 yarn --cwd client start
  codegen: yarn codegen --watch`)
}