import React from 'react';

import useGetExample from 'organisms/example/use-get-example';

import Paragraph from 'atoms/paragraph';
import Error from 'molecules/error';
import Loading from 'molecules/loading';

const Example: React.FC = () => {
  const { data, loading, error } = useGetExample();

  if (loading) return <Loading />;
  if (error || !data?.getExample) return <Error />;

  return <Paragraph>{data.getExample.content}</Paragraph>;
};

export default Example;
