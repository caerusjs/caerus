import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from 'molecules/loading';
import AtomRoutes from 'routes/atom.routes';

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' component={AtomRoutes} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
