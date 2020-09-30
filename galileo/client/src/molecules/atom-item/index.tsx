import React from 'react';

import Paragraph from 'atoms/paragraph';

import { GetAtomQuery } from 'types/graphql';

interface AtomItemProps {
  atom: GetAtomQuery['getAtom'];
  handleRemove: () => void;
}

const AtomItem: React.FC<AtomItemProps> = ({ atom }) => {
  return (
    <>
      <Paragraph>{atom.href}</Paragraph>
    </>
  );
};

export default AtomItem;
