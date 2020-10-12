import React from 'react';

import { useParams } from 'react-router';

import GetAtom from 'organisms/get-atom';

interface RouteParams {
  atomId: string;
}

const ShowAtomView: React.FC = () => {
  const { atomId } = useParams<RouteParams>();

  return <GetAtom atomId={atomId} />;
};

export default ShowAtomView;
