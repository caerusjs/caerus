import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from 'molecules/loading';
import ApplicationLayout from 'views/layouts/application.layout';

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' component={ApplicationLayout} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
