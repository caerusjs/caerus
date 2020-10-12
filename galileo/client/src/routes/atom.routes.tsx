import React, { lazy } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

const IndexAtomView = lazy(() => import('views/atom/index.view'));

const AtomRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/atoms/:atomId' component={IndexAtomView} />
      <Route path='/' component={IndexAtomView} />
    </Switch>
  );
};

export default AtomRoutes;
