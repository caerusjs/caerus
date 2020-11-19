import React from 'react';
import * as Atoms from '@caerusjs/dalton/dist/atoms';
import { toKebabCase } from '@caerusjs/helpers';
import { Heading2 } from '@caerusjs/dalton';
import { Link } from 'react-router-dom';

import styles from '@caerusjs/dalton/dist/atoms/Anchor/styles.module.css';

const IndexAtomView: React.FC = () => {
  const atoms = Object.keys(Atoms).filter((atom) => !atom.includes('Props'));

  const atomList = atoms.map((atom: string) => {
    return (
      <li key={atom}>
        <Link to={`/atoms/${toKebabCase(atom)}`} className={styles.root}>
          {atom}
        </Link>
      </li>
    );
  });

  return (
    <>
      <Heading2 style={{ marginBottom: '0.8rem' }}>Atoms</Heading2>
      <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>{atomList}</ul>
    </>
  );
};

export default IndexAtomView;
