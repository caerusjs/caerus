import React, { lazy, useState } from 'react';

import useGetAtom from 'organisms/get-atom/use-get-atom';

import Error from 'molecules/error';
import Loading from 'molecules/loading';
import { titleize } from '@caerusjs/helpers';

const GetAtom: React.FC<{ atomId: string }> = ({ atomId }) => {
  const [props, setProps] = useState();
  const { data, loading, error } = useGetAtom();

  if (loading) return <Loading />;
  if (error || !data?.getAtom) return <Error />;

  const Atom = lazy(async () => {
    try {
      const atom = (await import(`@caerusjs/dalton`)) as any;

      // Check if there is an exported member for
      if (atom[`${titleize(atomId)}`]) {
        setProps(atom.props);
        return { default: atom[`${titleize(atomId)}`] };
      } else {
        return import(`atoms/null`);
      }
    } catch {
      return import(`atoms/null`);
    }
  });

  return (
    <React.Suspense fallback='Loading atom...'>
      <div className='container'>{Atom ? <Atom {...props} /> : null}</div>
    </React.Suspense>
  );
};

export default GetAtom;
