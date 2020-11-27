import capitalize from 'capitalize';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import NullAtom from '../../atoms/null';

export const GetAtom: React.FC<{ atomId: string }> = ({ atomId }) => {
  const [props, setProps] = useState<{ children?: string }>();
  const atomName = capitalize.words(atomId).replace(/-/g, '');
  const propExport = `${atomId}Props`;

  const Atom = dynamic(
    () =>
      import('@caerusjs/dalton').then((atomToImport: any) => {
        try {
          if (atomToImport[atomName] && atomToImport[propExport]) {
            setProps(atomToImport[propExport]);
            return atomToImport[atomName];
          } else {
            throw new Error('Atom or props not found');
          }
        } catch {
          return NullAtom;
        }
      }),
    { loading: () => <p>...</p> },
  );

  if (!atomId) return <>Choose an element</>;

  return <Atom {...props} />;
};
