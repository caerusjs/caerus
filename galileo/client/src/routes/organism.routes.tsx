import React, { lazy } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

const IndexOrganismView = lazy(() => import('views/organism/index.view'));
const ShowOrganismView = lazy(() => import('views/organism/show.view'));

const OrganismRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Route path='/' component={IndexOrganismView} />
      <Route path='/organisms/:organismId' component={ShowOrganismView} />
    </>
  );
};

export default OrganismRoutes;
