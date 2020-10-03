import React, { lazy } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

const ShowAtomView = lazy(() => import('views/atom/show.view'));
const IndexAtomView = lazy(() => import('views/atom/index.view'));

const AtomRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/atoms/:atomId' component={ShowAtomView} />
      <Route path='/atoms/' component={IndexAtomView} />
      <Route path='/' component={IndexAtomView} />
    </Switch>
  );
};

export default AtomRoutes;
