import React, { lazy, useState } from 'react';

import { titleize } from '@caerusjs/helpers';

export const GetMolecule: React.FC<{ moleculeId: string }> = ({
  moleculeId,
}) => {
  const [props, setProps] = useState<{ children?: string }>();

  const Molecule = lazy(async () => {
    const fallbackMolecule = import(`molecules/null`);

    const moleculeName = titleize(moleculeId);
    const propExport = `${moleculeId}Props`;

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
      <div className='container'>
        {Molecule ? <Molecule {...props} /> : null}
      </div>
    </React.Suspense>
  );
};
