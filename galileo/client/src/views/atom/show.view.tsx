import React, { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { titleize } from '@caerusjs/helpers';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  atomId: string;
}

const ShowAtomView: React.FC = () => {
  const { atomId } = useParams<RouteParams>();
  const [atom, setAtom] = useState<any>();

  const importAtom = () =>
    lazy(() =>
      import(`@caerusjs/dalton`)
        .catch(() => import(`atoms/null`))
        .then((module: any) => ({ default: module[`${titleize(atomId)}`] })),
    );

  useEffect(() => {
    async function loadAtom() {
      const Atom = importAtom();

      Promise.resolve(<Atom>Hello</Atom>).then(setAtom);
    }

    loadAtom();
  }, [atomId]);

  return (
    <ApplicationLayout>
      <React.Suspense fallback='Loading atom...'>
        <div className='container'>{atom}</div>
      </React.Suspense>
    </ApplicationLayout>
  );
};

export default ShowAtomView;
