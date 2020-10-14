import { titleize } from '@caerusjs/helpers';

export const createView = (
  name: string,
  action: 'New' | 'Edit' | 'Show' | 'Index',
) => {
  switch (action) {
    case 'New':
      return `import React from 'react'

import Add${titleize(name)} from 'organisms/add-${name}'
import ApplicationLayout from 'views/layouts/application.layout'

const New${titleize(name)}View: React.FC = () => {

  return (
    <ApplicationLayout>
      <Add${titleize(name)} />
    </ApplicationLayout>
  )
}

export default New${titleize(name)}View`;

    case 'Edit':
      return `import React from 'react';
import { useParams } from 'react-router-dom';

import Update${titleize(name)} from 'organisms/update-${name}';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  ${name}Id: string;
}

const Edit${titleize(name)}View: React.FC = () => {
  const { ${name}Id } = useParams<RouteParams>();

  return (
    <ApplicationLayout>
      <Update${titleize(name)} id={${name}Id} />
    </ApplicationLayout>
  );
};

export default Edit${titleize(name)}View;
      
`;

    case 'Index':
      return `import React from 'react';

import Anchor from 'atoms/anchor';
import { Link } from 'react-router-dom';
import Get${titleize(name)}s from 'organisms/get-${name}s';

import ApplicationLayout from 'views/layouts/application.layout';

const Index${titleize(name)}View: React.FC = () => {
  return (
    <ApplicationLayout>
      <Link to={'/${name}s/new'}>
        <Anchor>Add ${titleize(name)}</Anchor>
      </Link>
      <Get${titleize(name)}s />
    </ApplicationLayout>
  );
};

export default Index${titleize(name)}View;
      
`;

    case 'Show':
      return `import React from 'react';
import { useParams } from 'react-router-dom';

import Get${titleize(name)} from 'organisms/get-${name}';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  ${name}Id: string;
}

const Show${titleize(name)}View: React.FC = () => {
  const { ${name}Id } = useParams<RouteParams>();

  return (
    <ApplicationLayout>
      <Get${titleize(name)} id={${name}Id} />
    </ApplicationLayout>
  );
};

export default Show${titleize(name)}View;

`;
  }
};
