import React from 'react';
import { Link } from 'react-router-dom';

import * as Organisms from '@caerusjs/dalton/dist/organisms';
import { toKebabCase } from '@caerusjs/helpers';
import { Heading2 } from '@caerusjs/dalton';

const IndexOrganismView: React.FC = () => {
  const organisms = Object.keys(Organisms).filter(
    (organism) => !organism.includes('Props'),
  );

  const organismList = organisms.map((organism: string) => {
    return (
      <li key={organism}>
        <Link to={`/organisms/${toKebabCase(organism)}`}>{organism}</Link>
      </li>
    );
  });

  return (
    <>
      <Heading2>Organisms</Heading2>
      <ul>{organismList}</ul>
    </>
  );
};

export default IndexOrganismView;
