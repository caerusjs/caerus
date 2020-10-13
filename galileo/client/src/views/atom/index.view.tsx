import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationLayout from 'views/layouts/application.layout';
import ShowAtomView from 'views/atom/show.view';
import * as Atoms from '@caerusjs/dalton';

const IndexAtomView: React.FC = () => {
  const atoms = Object.keys(Atoms).filter((atom) => !atom.includes('Props'));

  const atomList = atoms.map((atom: string) => {
    return (
      <li key={atom}>
        <Link to={`/atoms/${atom.toLowerCase()}`}>{atom}</Link>
      </li>
    );
  });

  return (
    <ApplicationLayout>
      <ul>{atomList}</ul>
      <ShowAtomView />
    </ApplicationLayout>
  );
};

export default IndexAtomView;
