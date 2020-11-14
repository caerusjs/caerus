import React from 'react';
import { Link } from 'react-router-dom';

import * as Molecules from '@caerusjs/dalton/dist/molecules';
import { toKebabCase } from '@caerusjs/helpers';
import { Heading2 } from '@caerusjs/dalton';

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
    <>
      <Heading2>Molecules</Heading2>
      <ul>{moleculeList}</ul>
    </>
  );
};

export default IndexMoleculeView;
