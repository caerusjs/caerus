import { createFile } from '../../../helpers/create-file';

import { createClientFolders } from './create-client-folders';
import { createClientPackage } from './create-client-package';
import { createTSConfig } from './create-tsconfig';
import { createIndexHTML } from './public/create-index-html';
import { createSetupTests } from './src/support/create-setup-tests';
import { createJestConfig } from './src/support/create-jest-config';
import { createIndexRoutes } from './src/routes/create-index-routes';
import { createExampleRoutes } from './src/routes/create-example-routes';
import { createExampleViews } from './src/views/create-example-view';
import { createLayout } from './src/views/create-layout';
import { createLoadingSpinner } from './src/molecules/create-loading-spinner';
import { createLoadingSpinnerCSS } from './src/molecules/create-loading-spinner-css';
import { createClientIndex } from './src/create-client-index';
import { createENV } from './create-env';
import { createExampleOrganism } from './src/organisms/create-example-organism';
import { createUseGetExample } from './src/organisms/create-use-get-example';
import { createGetExampleDocument } from './src/organisms/create-get-example-document';
import { createParagraph } from './src/atoms/create-paragraph';
import { createParagraphCSS } from './src/atoms/create-paragraph-css';
import { createErrorCSS } from './src/molecules/create-error-css';
import { createError } from './src/molecules/create-error';
import { createCloneWithoutTypename } from './src/lib/create-clone-without-typename';
import { createResourceForm } from './src/molecules/create-resource-form';
import { createPropTypes } from './src/types/create-prop-types';
import { createAnchor } from './src/atoms/create-anchor';
import { createAnchorCSS } from './src/atoms/create-anchor-css';
import { createButtonCSS } from './src/atoms/create-button-css';
import { createButton } from './src/atoms/create-button';
import { createInitialGraphqlTypes } from './src/types/create-initial-graphql-types';

export const createClient = (name: string) => {
  createClientFolders(name);

  // - root
  createFile(`${name}/client/`, 'package.json', createClientPackage(name));
  createFile(`${name}/client/`, 'tsconfig.json', createTSConfig());
  createFile(`${name}/client/`, '.env', createENV());
  createFile(`${name}/client/src/`, 'index.tsx', createClientIndex());

  // - lib
  createFile(
    `${name}/client/src/lib/`,
    'clone-without-typename.ts',
    createCloneWithoutTypename(),
  );

  // - props
  createFile(`${name}/client/src/types/`, 'props.ts', createPropTypes());

  // - public
  createFile(`${name}/client/public/`, 'index.html', createIndexHTML(name));

  // - support
  createFile(
    `${name}/client/src/support/`,
    'setupTests.ts',
    createSetupTests(),
  );
  createFile(
    `${name}/client/src/support/`,
    'jest.config.js',
    createJestConfig(),
  );

  // - types
  createFile(`${name}/client/src/types/`, 'props.ts', createPropTypes());
  createFile(
    `${name}/client/src/types/`,
    'graphql.ts',
    createInitialGraphqlTypes(),
  );

  // - routes
  createFile(`${name}/client/src/routes/`, 'index.tsx', createIndexRoutes());
  createFile(
    `${name}/client/src/routes/`,
    'example.routes.tsx',
    createExampleRoutes(),
  );

  // - views
  createFile(
    `${name}/client/src/views/example/`,
    'index.view.tsx',
    createExampleViews(),
  );
  createFile(
    `${name}/client/src/views/layouts/`,
    'application.layout.tsx',
    createLayout(),
  );

  // - atoms
  createFile(
    `${name}/client/src/atoms/paragraph/`,
    'index.tsx',
    createParagraph(),
  );
  createFile(
    `${name}/client/src/atoms/paragraph/`,
    'paragraph.module.css',
    createParagraphCSS(),
  );
  createFile(`${name}/client/src/atoms/anchor/`, 'index.tsx', createAnchor());
  createFile(
    `${name}/client/src/atoms/anchor/`,
    'anchor.module.css',
    createAnchorCSS(),
  );
  createFile(`${name}/client/src/atoms/button/`, 'index.tsx', createButton());
  createFile(
    `${name}/client/src/atoms/button/`,
    'button.module.css',
    createButtonCSS(),
  );

  // - molecules
  createFile(
    `${name}/client/src/molecules/loading/`,
    'index.tsx',
    createLoadingSpinner(),
  );
  createFile(
    `${name}/client/src/molecules/loading/`,
    'loading.module.css',
    createLoadingSpinnerCSS(),
  );
  createFile(`${name}/client/src/molecules/error/`, 'index.tsx', createError());
  createFile(
    `${name}/client/src/molecules/error/`,
    'error.module.css',
    createErrorCSS(),
  );
  createFile(
    `${name}/client/src/molecules/resource-form/`,
    'index.tsx',
    createResourceForm(),
  );

  // - organisms
  createFile(
    `${name}/client/src/organisms/example/`,
    'index.tsx',
    createExampleOrganism(),
  );
  createFile(
    `${name}/client/src/organisms/example/`,
    'use-get-example.ts',
    createUseGetExample(),
  );
  createFile(
    `${name}/client/src/organisms/example/`,
    'get-example.graphql',
    createGetExampleDocument(),
  );
};
