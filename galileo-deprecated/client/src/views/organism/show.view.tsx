import React from 'react';

import { useParams } from 'react-router';

import { GetOrganism } from 'hooks/get-organism';

interface RouteParams {
  organismId: string;
}

const ShowOrganismView: React.FC = () => {
  const { organismId } = useParams<RouteParams>();
  console.log(organismId, 'id');

  return <GetOrganism organismId={organismId} />;
};

export default ShowOrganismView;
