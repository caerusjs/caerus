import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationLayout from 'views/layouts/application.layout';
import ShowMoleculeView from 'views/molecule/show.view';
import * as Molecules from '@caerusjs/dalton';

const IndexMoleculeView: React.FC = () => {
  const molecules = Object.keys(Molecules).filter(
    (molecule) => !molecule.includes('Props'),
  );

  const moleculeList = molecules.map((molecule: string) => {
    return (
      <li key={molecule}>
        <Link to={`/molecules/${molecule.toLowerCase()}`}>{molecule}</Link>
      </li>
    );
  });

  return (
    <ApplicationLayout>
      <ul>{moleculeList}</ul>
      <ShowMoleculeView />
    </ApplicationLayout>
  );
};

export default IndexMoleculeView;
