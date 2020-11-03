import React from 'react';
import { Link } from 'react-router-dom';

import * as Molecules from '@caerusjs/dalton/dist/molecules';
import { toKebabCase } from '@caerusjs/helpers';

import ApplicationLayout from 'views/layouts/application.layout';

const IndexMoleculeView: React.FC = () => {
  const molecules = Object.keys(Molecules).filter(
    (molecule) => !molecule.includes('Props'),
  );

  const moleculeList = molecules.map((molecule: string) => {
    return (
      <li key={molecule}>
        <Link to={`/molecules/${toKebabCase(molecule)}`}>{molecule}</Link>
      </li>
    );
  });

  return (
    <ApplicationLayout>
      <ul>{moleculeList}</ul>
    </ApplicationLayout>
  );
};

export default IndexMoleculeView;
