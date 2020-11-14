import React from 'react';

import { useParams } from 'react-router';

import { GetMolecule } from 'hooks/get-molecule';

interface RouteParams {
  moleculeId: string;
}

const ShowMoleculeView: React.FC = () => {
  const { moleculeId } = useParams<RouteParams>();
  console.log(moleculeId, 'id');

  return <GetMolecule moleculeId={moleculeId} />;
};

export default ShowMoleculeView;
