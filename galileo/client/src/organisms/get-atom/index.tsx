import React from 'react';

import useGetAtom from 'organisms/get-atom/use-get-atom';

import { Heading1 } from '@caerusjs/dalton';
import Error from 'molecules/error';
import Loading from 'molecules/loading';

const GetAtom: React.FC = () => {
  const { data, loading, error } = useGetAtom();

  if (loading) return <Loading />;
  if (error || !data?.getAtom) return <Error />;

  return <Heading1>{data.getAtom.href}</Heading1>;
};

export default GetAtom;
