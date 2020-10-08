import React from 'react';
import { useParams } from 'react-router';

import GetAtom from 'organisms/get-atom';
import ApplicationLayout from 'views/layouts/application.layout';

interface RouteParams {
  atomId: string;
}

const ShowAtomView: React.FC = () => {
  const { atomId } = useParams<RouteParams>();

  return (
    <ApplicationLayout>
      <GetAtom atomId={atomId} />
    </ApplicationLayout>
  );
};

export default ShowAtomView;
