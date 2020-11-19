import React from 'react';
import { Link } from 'react-router-dom';

import * as Molecules from '@caerusjs/dalton/dist/molecules';
import { toKebabCase } from '@caerusjs/helpers';
import { Heading2 } from '@caerusjs/dalton';

import styles from '@caerusjs/dalton/dist/atoms/Anchor/styles.module.css';

const IndexMoleculeView: React.FC = () => {
  const molecules = Object.keys(Molecules).filter(
    (molecule) => !molecule.includes('Props'),
  );

  const moleculeList = molecules.map((molecule: string) => {
    return (
      <li key={molecule}>
        <Link
          to={`/molecules/${toKebabCase(molecule)}`}
          className={styles.root}
        >
          {molecule}
        </Link>
      </li>
    );
  });

  return (
    <>
      <Heading2 style={{ marginBottom: '0.8rem' }}>Molecules</Heading2>
      <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
        {moleculeList}
      </ul>
    </>
  );
};

export default IndexMoleculeView;
