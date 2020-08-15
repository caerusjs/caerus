export const createProcfile = () => {
  return (`server: PORT=4000 yarn --cwd server dev
web: PORT=3000 yarn --cwd client start
codegen: yarn codegen --watch
#postgres: ./server/bin/boot-postgres -D /usr/local/var/postgres -p 5432`)
}

// Catch this error and reboot 'Load GraphQL schemas [failed]'
