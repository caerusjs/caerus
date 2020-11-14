import React, { lazy } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

const IndexMoleculeView = lazy(() => import('views/molecule/index.view'));
const ShowMoleculeView = lazy(() => import('views/molecule/show.view'));

const MoleculeRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Route path='/' component={IndexMoleculeView} />
      <Route path='/molecules/:moleculeId' component={ShowMoleculeView} />
    </>
  );
};

export default MoleculeRoutes;
