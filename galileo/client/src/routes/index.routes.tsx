import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from 'molecules/loading';
import AtomRoutes from 'routes/atom.routes';
import MoleculeRoutes from 'routes/molecule.routes';
import OrganismRoutes from 'routes/organism.routes';
import ApplicationLayout from 'views/layouts/application.layout';

const AppRoutes = () => {
  return (
    <Router>
      <ApplicationLayout>
        <Suspense fallback={<Loading />}>
          <Route path='/' component={AtomRoutes} />
          <Route path='/' component={MoleculeRoutes} />
          <Route path='/' component={OrganismRoutes} />
        </Suspense>
      </ApplicationLayout>
    </Router>
  );
};

export default AppRoutes;
