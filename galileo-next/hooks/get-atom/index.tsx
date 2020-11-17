import capitalize from 'capitalize';
import React, { lazy, useState } from 'react';

export const GetAtom: React.FC<{ atomId: string }> = ({ atomId }) => {
  const [props, setProps] = useState<{ children?: string }>();

  const Atom = lazy(async () => {
    const fallbackAtom = import(`../../atoms/null`);

    const atomName = capitalize.words(atomId).replace(/-/g, '');
    const propExport = `${atomId}Props`;

    // Check if there is an exported member for the atom
    try {
      const atomToImport = (await import(`@caerusjs/dalton`)) as any;

      if (atomToImport[atomName] && atomToImport[propExport]) {
        setProps(atomToImport[propExport]);
        return { default: atomToImport[atomName] };
      } else {
        throw new Error('Atom or props not found');
      }
    } catch {
      return fallbackAtom;
    }
  });

  if (!atomId) return <>Choose an element</>;

  return (
    <React.Suspense fallback='Loading atom...'>
      {Atom ? <Atom {...props} /> : null}
    </React.Suspense>
  );
};
