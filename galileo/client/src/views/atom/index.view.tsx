import React from 'react';
import { Link } from 'react-router-dom';
import * as Atoms from '@caerusjs/dalton/dist/atoms';
import { toKebabCase } from '@caerusjs/helpers';

import ApplicationLayout from 'views/layouts/application.layout';

const IndexAtomView: React.FC = () => {
  const atoms = Object.keys(Atoms).filter((atom) => !atom.includes('Props'));

  const atomList = atoms.map((atom: string) => {
    return (
      <li key={atom}>
        <Link to={`/atoms/${toKebabCase(atom)}`}>{atom}</Link>
      </li>
    );
  });

  return (
    <ApplicationLayout>
      <ul>{atomList}</ul>
    </ApplicationLayout>
  );
};

export default IndexAtomView;
