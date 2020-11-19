import React from 'react';
import { Link } from 'react-router-dom';

import * as Organisms from '@caerusjs/dalton/dist/organisms';
import { toKebabCase } from '@caerusjs/helpers';
import { Heading2 } from '@caerusjs/dalton';

import styles from '@caerusjs/dalton/dist/atoms/Anchor/styles.module.css';

const IndexOrganismView: React.FC = () => {
  const organisms = Object.keys(Organisms).filter(
    (organism) => !organism.includes('Props'),
  );

  const organismList = organisms.map((organism: string) => {
    return (
      <li key={organism}>
        <Link
          to={`/organisms/${toKebabCase(organism)}`}
          className={styles.root}
        >
          {organism}
        </Link>
      </li>
    );
  });

  return (
    <>
      <Heading2 style={{ marginBottom: '0.8rem' }}>Organisms</Heading2>
      <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
        {organismList}
      </ul>
    </>
  );
};

export default IndexOrganismView;
