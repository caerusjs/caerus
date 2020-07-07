import { Argv } from 'yargs'

import { createFile } from '../helpers/create-file'

import { createFolders } from './initialize_cmd/client/create-folders'
import { createPackage } from './initialize_cmd/client/create-package'
import { createTSConfig } from './initialize_cmd/client/create-tsconfig'
import { createIndexHTML } from './initialize_cmd/client/create-index-html'
import { createSetupTests } from './initialize_cmd/client/create-setup-tests'
import { createJestConfig } from './initialize_cmd/client/create-jest-config'
import { createIndexRoutes } from './initialize_cmd/client/create-index-routes'
import { createExampleRoutes } from './initialize_cmd/client/create-example-routes'
import { createExampleViews } from './initialize_cmd/client/create-example-view'
import { createLayout } from './initialize_cmd/client/create-layout'
import { createLoadingSpinner } from './initialize_cmd/client/create-loading-spinner'
import { createLoadingSpinnerCSS } from './initialize_cmd/client/create-loading-spinner-css'

export const command = 'init [name]'
export const describe = 'Initialize a new project [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFolders(argv.name)
  createFile(`${argv.name}/client/`, 'package.json',  createPackage(argv.name))
  createFile(`${argv.name}/client/`, 'tsconfig.json',  createTSConfig())
  createFile(`${argv.name}/client/public/`, 'index.html',  createIndexHTML(argv.name))
  createFile(`${argv.name}/client/support/`, 'setupTests.ts',  createSetupTests())
  createFile(`${argv.name}/client/support/`, 'jest.config.js',  createJestConfig())
  createFile(`${argv.name}/client/routes/`, 'index.tsx',  createIndexRoutes())
  createFile(`${argv.name}/client/routes/`, 'example.routes.tsx',  createExampleRoutes())
  createFile(`${argv.name}/client/views/example/`, 'index.view.tsx',  createExampleViews())
  createFile(`${argv.name}/client/views/layouts/`, 'application.layout.tsx',  createLayout())
  createFile(`${argv.name}/client/molecules/loading/`, 'index.tsx',  createLoadingSpinner())
  createFile(`${argv.name}/client/molecules/loading/`, 'loading.module.css',  createLoadingSpinnerCSS())
  // Create example organism
  // Create client index.tsx
}

