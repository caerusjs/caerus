import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from 'molecules/loading';
import AtomRoutes from 'routes/atom.routes';
import MoleculeRoutes from 'routes/molecule.routes';

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Route path='/' component={AtomRoutes} />
        <Route path='/' component={MoleculeRoutes} />
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
