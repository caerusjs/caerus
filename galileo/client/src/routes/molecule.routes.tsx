import React, { lazy } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

const IndexMoleculeView = lazy(() => import('views/molecule/index.view'));

const MoleculeRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/molecules/:moleculeId' component={IndexMoleculeView} />
      <Route path='/' component={IndexMoleculeView} />
    </Switch>
  );
};

export default MoleculeRoutes;
