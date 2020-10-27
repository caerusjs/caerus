import { toTitleCase } from '@caerusjs/helpers';

export const createView = (
  name: string,
  action: 'New' | 'Edit' | 'Show' | 'Index',
) => {
  switch (action) {
    case 'New':
      return `import React from 'react'

import Add${toTitleCase(name)} from 'organisms/add-${name}'
import ApplicationLayout from 'views/layouts/application.layout'

const New${toTitleCase(name)}View: React.FC = () => {

  return (
    <ApplicationLayout>
      <Add${toTitleCase(name)} />
    </ApplicationLayout>
  )
}

export default New${toTitleCase(name)}View`;

    case 'Edit':
      return `import React from 'react';
import { useParams } from 'react-router-dom';

import Update${toTitleCase(name)} from 'organisms/update-${name}';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  ${name}Id: string;
}

const Edit${toTitleCase(name)}View: React.FC = () => {
  const { ${name}Id } = useParams<RouteParams>();

  return (
    <ApplicationLayout>
      <Update${toTitleCase(name)} id={${name}Id} />
    </ApplicationLayout>
  );
};

export default Edit${toTitleCase(name)}View;
      
`;

    case 'Index':
      return `import React from 'react';

import Anchor from 'atoms/anchor';
import { Link } from 'react-router-dom';
import Get${toTitleCase(name)}s from 'organisms/get-${name}s';

import ApplicationLayout from 'views/layouts/application.layout';

const Index${toTitleCase(name)}View: React.FC = () => {
  return (
    <ApplicationLayout>
      <Link to={'/${name}s/new'}>
        <Anchor>Add ${toTitleCase(name)}</Anchor>
      </Link>
      <Get${toTitleCase(name)}s />
    </ApplicationLayout>
  );
};

export default Index${toTitleCase(name)}View;
      
`;

    case 'Show':
      return `import React from 'react';
import { useParams } from 'react-router-dom';

import Get${toTitleCase(name)} from 'organisms/get-${name}';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  ${name}Id: string;
}

const Show${toTitleCase(name)}View: React.FC = () => {
  const { ${name}Id } = useParams<RouteParams>();

  return (
    <ApplicationLayout>
      <Get${toTitleCase(name)} id={${name}Id} />
    </ApplicationLayout>
  );
};

export default Show${toTitleCase(name)}View;

`;
  }
};
