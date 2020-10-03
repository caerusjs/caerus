import React, { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  atomId: string;
}

const ShowAtomView: React.FC = () => {
  const { atomId } = useParams<RouteParams>();
  const [atom, setAtom] = useState<any>();

  const importAtom = () =>
    lazy(() => import(`atoms/${atomId}`).catch(() => import(`atoms/null`)));

  useEffect(() => {
    async function loadAtom() {
      const Atom = importAtom();

      Promise.resolve(<Atom>Hello</Atom>).then(setAtom);
    }

    loadAtom();
  }, [atomId]);

  return (
    <React.Suspense fallback='Loading atom...'>
      <div className='container'>{atom}</div>
    </React.Suspense>
  );
};

export default ShowAtomView;
