import React, { lazy, useState } from 'react';

import { toCamelCase } from '@caerusjs/helpers';
import capitalize from 'capitalize';

export const GetOrganism: React.FC<{ organismId: string }> = ({
  organismId,
}) => {
  const [props, setProps] = useState<{ children?: string }>();
  const propExport = `${toCamelCase(organismId)}Props`;
  console.log(propExport, 'prop');

  const Organism = lazy(async () => {
    const fallbackOrganism = import(`atoms/null`);

    const organismName = capitalize.words(organismId).replace(/-/g, '');
    console.log(organismName, 'organismName');

    // Check if there is an exported member for the atom
    try {
      const organismToImport = (await import(`@caerusjs/dalton`)) as any;

      if (organismToImport[organismName] && organismToImport[propExport]) {
        setProps(organismToImport[propExport]);
        return { default: organismToImport[organismName] };
      } else {
        throw new Error('Organism or props not found');
      }
    } catch {
      return fallbackOrganism;
    }
  });

  if (!organismId) return <>Choose an element</>;

  return (
    <React.Suspense fallback='Loading organism...'>
      <div className='container'>
        {Organism ? <Organism {...props} /> : null}
      </div>
    </React.Suspense>
  );
};
