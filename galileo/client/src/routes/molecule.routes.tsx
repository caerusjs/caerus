import React, { lazy } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import ApplicationLayout from 'views/layouts/application.layout';

const IndexMoleculeView = lazy(() => import('views/molecule/index.view'));
const ShowMoleculeView = lazy(() => import('views/molecule/show.view'));

const MoleculeRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <ApplicationLayout>
      <Route path='/' component={IndexMoleculeView} />
      <Route path='/molecules/:moleculeId' component={ShowMoleculeView} />
    </ApplicationLayout>
  );
};

export default MoleculeRoutes;
