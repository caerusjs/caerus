import React, { lazy } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

const IndexAtomView = lazy(() => import('views/atom/index.view'));
const ShowAtomView = lazy(() => import('views/atom/show.view'));

const AtomRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Route path='/' component={IndexAtomView} />
      <Route path='/atoms/:atomId' component={ShowAtomView} />
    </>
  );
};

export default AtomRoutes;
