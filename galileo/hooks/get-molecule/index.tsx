import React, { lazy, useState } from 'react';

import { toCamelCase } from '@caerusjs/helpers';
import capitalize from 'capitalize';

export const GetMolecule: React.FC<{ moleculeId: string }> = ({
  moleculeId,
}) => {
  const [props, setProps] = useState<{ children?: string }>();
  const propExport = `${toCamelCase(moleculeId)}Props`;
  console.log(propExport, 'prop');

  const Molecule = lazy(async () => {
    const fallbackMolecule = import(`../../atoms/null`);

    const moleculeName = capitalize.words(moleculeId).replace(/-/g, '');
    console.log(moleculeName, 'moleculeName');

    // Check if there is an exported member for the atom
    try {
      const moleculeToImport = (await import(`@caerusjs/dalton`)) as any;

      if (moleculeToImport[moleculeName] && moleculeToImport[propExport]) {
        setProps(moleculeToImport[propExport]);
        return { default: moleculeToImport[moleculeName] };
      } else {
        throw new Error('Molecule or props not found');
      }
    } catch {
      return fallbackMolecule;
    }
  });

  if (!moleculeId) return <>Choose an element</>;

  return (
    <React.Suspense fallback='Loading molecule...'>
      {Molecule ? <Molecule {...props} /> : null}
    </React.Suspense>
  );
};
