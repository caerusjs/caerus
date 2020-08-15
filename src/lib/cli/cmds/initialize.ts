import { Argv } from 'yargs'

import { createFile } from '../helpers/create-file'

import { createClientFolders } from './initialize_cmd/client/create-client-folders'
import { createClientPackage } from './initialize_cmd/client/create-client-package'
import { createTSConfig } from './initialize_cmd/client/create-tsconfig'
import { createIndexHTML } from './initialize_cmd/client/public/create-index-html'
import { createSetupTests } from './initialize_cmd/client/src/support/create-setup-tests'
import { createJestConfig } from './initialize_cmd/client/src/support/create-jest-config'
import { createIndexRoutes } from './initialize_cmd/client/src/routes/create-index-routes'
import { createExampleRoutes } from './initialize_cmd/client/src/routes/create-example-routes'
import { createExampleViews } from './initialize_cmd/client/src/views/create-example-view'
import { createLayout } from './initialize_cmd/client/src/views/create-layout'
import { createLoadingSpinner } from './initialize_cmd/client/src/molecules/create-loading-spinner'
import { createLoadingSpinnerCSS } from './initialize_cmd/client/src/molecules/create-loading-spinner-css'
import { createClientIndex } from './initialize_cmd/client/src/create-client-index'
import { createENV } from './initialize_cmd/client/create-env'
import { createGitIgnore } from './initialize_cmd/root/create-gitignore'
import { createExampleOrganism } from './initialize_cmd/client/src/organisms/create-example-organism'
import { createUseGetExample } from './initialize_cmd/client/src/organisms/create-use-get-example'
import { createGetExampleDocument } from './initialize_cmd/client/src/organisms/create-get-example-document'
import { createP } from './initialize_cmd/client/src/atoms/create-p'
import { createPCSS } from './initialize_cmd/client/src/atoms/create-p-css'
import { createErrorCSS } from './initialize_cmd/client/src/molecules/create-error-css'
import { createError } from './initialize_cmd/client/src/molecules/create-error'
import { createCloneWithoutTypename } from './initialize_cmd/client/src/lib/create-clone-without-typename'
import { createCodegen } from './initialize_cmd/root/create-codegen'
import { createPackage } from './initialize_cmd/root/create-package'
import { createProcfile } from './initialize_cmd/root/create-procfile'
import { createServersideFolders } from './initialize_cmd/server/create-server-folders'
import { createApollo } from './initialize_cmd/server/config/create-apollo'
import { createAssets } from './initialize_cmd/server/config/create-assets'
import { createCors } from './initialize_cmd/server/config/create-cors'
import { createConfigIndex } from './initialize_cmd/server/config/create-config-index'
import { createRoutes } from './initialize_cmd/server/config/create-routes'
import { createDbConfig } from './initialize_cmd/server/create-db-config'
import { createNodemon } from './initialize_cmd/server/create-nodemon'
import { createTsconfig } from './initialize_cmd/server/create-tsconfig'
import { createTsconfigProd } from './initialize_cmd/server/create-tsconfig.prod'
import { createSeeds } from './initialize_cmd/server/db/create-seeds'
import { createDatabase } from './initialize_cmd/server/support/create-database'
import { createJestIntegration } from './initialize_cmd/server/support/jest/create-jest-integration'
import { createPuppeteerConfig } from './initialize_cmd/server/support/puppeteer/create-puppeteer-config'
import { createServer } from './initialize_cmd/server/create-server'
import { createServerPackage } from './initialize_cmd/server/create-server-package'
import { createExampleResolver } from './initialize_cmd/server/resolvers/example/create-example-resolver'
import { createExampleEntity } from './initialize_cmd/server/entities/create-example-entity'
import { createServerEnv } from './initialize_cmd/server/create-server-env'
import { createResourceForm } from './initialize_cmd/client/src/molecules/create-resource-form'
import { createPropTypes } from './initialize_cmd/client/src/types/create-prop-types'
import { createLinkCSS } from './initialize_cmd/client/src/molecules/create-link-css'
import { createLink } from './initialize_cmd/client/src/molecules/create-link'
import { createA } from './initialize_cmd/client/src/atoms/create-a'
import { createACSS } from './initialize_cmd/client/src/atoms/create-a-css'

export const command = 'init [name]'
export const describe = 'Initialize a new project [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  // Root
  createFile(`${argv.name}/`, '.gitignore',  createGitIgnore())
  createFile(`${argv.name}/`, 'codegen.yml',  createCodegen())
  createFile(`${argv.name}/`, 'package.json',  createPackage(argv.name))
  createFile(`${argv.name}/`, 'Procfile.dev',  createProcfile())

  // Clientside
  createClientFolders(argv.name)

  // - root
  createFile(`${argv.name}/client/`, 'package.json',  createClientPackage(argv.name))
  createFile(`${argv.name}/client/`, 'tsconfig.json',  createTSConfig())
  createFile(`${argv.name}/client/`, '.env',  createENV())
  createFile(`${argv.name}/client/src/`, 'index.tsx',  createClientIndex())

  // - lib
  createFile(`${argv.name}/client/src/lib/`, 'clone-without-typename.ts',  createCloneWithoutTypename())
 
  // - props
  createFile(`${argv.name}/client/src/types/`, 'props.ts',  createPropTypes())
  
  // - public
  createFile(`${argv.name}/client/public/`, 'index.html',  createIndexHTML(argv.name))

  // - support
  createFile(`${argv.name}/client/src/support/`, 'setupTests.ts',  createSetupTests())
  createFile(`${argv.name}/client/src/support/`, 'jest.config.js',  createJestConfig())

  // - types
  createFile(`${argv.name}/client/src/types/`, 'props.ts',  createPropTypes())

  // - routes
  createFile(`${argv.name}/client/src/routes/`, 'index.tsx',  createIndexRoutes())
  createFile(`${argv.name}/client/src/routes/`, 'example.routes.tsx',  createExampleRoutes())

  // - views
  createFile(`${argv.name}/client/src/views/example/`, 'index.view.tsx',  createExampleViews())
  createFile(`${argv.name}/client/src/views/layouts/`, 'application.layout.tsx',  createLayout())

  // - atoms
  createFile(`${argv.name}/client/src/atoms/p/`, 'index.tsx',  createP())
  createFile(`${argv.name}/client/src/atoms/p/`, 'p.module.css',  createPCSS())
  createFile(`${argv.name}/client/src/atoms/a/`, 'index.tsx',  createA())
  createFile(`${argv.name}/client/src/atoms/a/`, 'a.module.css',  createACSS())


  // - molecules
  createFile(`${argv.name}/client/src/molecules/loading/`, 'index.tsx',  createLoadingSpinner())
  createFile(`${argv.name}/client/src/molecules/loading/`, 'loading.module.css',  createLoadingSpinnerCSS())
  createFile(`${argv.name}/client/src/molecules/error/`, 'index.tsx',  createError())
  createFile(`${argv.name}/client/src/molecules/error/`, 'error.module.css',  createErrorCSS())
  createFile(`${argv.name}/client/src/molecules/link/`, 'index.tsx',  createLink())
  createFile(`${argv.name}/client/src/molecules/link/`, 'link.module.css',  createLinkCSS())
  createFile(`${argv.name}/client/src/molecules/resource-form/`, 'index.tsx',  createResourceForm())

  // - organisms
  createFile(`${argv.name}/client/src/organisms/example/`, 'index.tsx',  createExampleOrganism())
  createFile(`${argv.name}/client/src/organisms/example/`, 'use-get-example.ts',  createUseGetExample())
  createFile(`${argv.name}/client/src/organisms/example/`, 'get-example.graphql',  createGetExampleDocument())

  // Serverside
  createServersideFolders(argv.name)

  // - root
  createFile(`${argv.name}/server/`, 'ormconfig.js',  createDbConfig(argv.name))
  createFile(`${argv.name}/server/`, 'nodemon.json',  createNodemon())
  createFile(`${argv.name}/server/`, 'package.json',  createServerPackage(argv.name))
  createFile(`${argv.name}/server/`, 'tsconfig.json',  createTsconfig())
  createFile(`${argv.name}/server/`, 'tsconfig.prod.json',  createTsconfigProd())
  createFile(`${argv.name}/server/`, '.env',  createServerEnv())

  // - src
  createFile(`${argv.name}/server/src/`, 'server.ts',  createServer())

  // - config
  createFile(`${argv.name}/server/src/config/`, 'apollo.ts',  createApollo())
  createFile(`${argv.name}/server/src/config/`, 'assets.ts',  createAssets())
  createFile(`${argv.name}/server/src/config/`, 'cors.ts',  createCors())
  createFile(`${argv.name}/server/src/config/`, 'index.ts',  createConfigIndex())
  createFile(`${argv.name}/server/src/config/`, 'routes.ts',  createRoutes())

  // - db
  createFile(`${argv.name}/server/db/`, 'seeds.ts',  createSeeds())

  // - support
  createFile(`${argv.name}/server/support/`, 'database.ts',  createDatabase())
  createFile(`${argv.name}/server/support/jest/`, 'jest.config.js',  createJestConfig())
  createFile(`${argv.name}/server/support/jest/`, 'jest.integration.config.js',  createJestIntegration())
  createFile(`${argv.name}/server/support/puppeteer/`, 'puppeteer.config.js',  createPuppeteerConfig())
  
  // - resolvers
  createFile(`${argv.name}/server/src/resolvers/example/`, 'example.resolver.ts',  createExampleResolver())

  // - entities
  createFile(`${argv.name}/server/src/entities/`, 'example.entity.ts',  createExampleEntity())
}
