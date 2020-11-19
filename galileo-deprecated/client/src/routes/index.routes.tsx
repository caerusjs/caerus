import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from 'molecules/loading';
import ApplicationLayout from 'views/layouts/application.layout';

const IndexAtomView = lazy(() => import('views/atom/index.view'));
const ShowAtomView = lazy(() => import('views/atom/show.view'));

const IndexMoleculeView = lazy(() => import('views/molecule/index.view'));
const ShowMoleculeView = lazy(() => import('views/molecule/show.view'));

const IndexOrganismView = lazy(() => import('views/organism/index.view'));
const ShowOrganismView = lazy(() => import('views/organism/show.view'));

const AppRoutes = () => {
  return (
    <Router>
      <ApplicationLayout>
        <Suspense fallback={<Loading />}>
          <div className='row'>
            <div className='col-2'>
              <Route path='/' component={IndexAtomView} />
              <Route path='/' component={IndexMoleculeView} />
              <Route path='/' component={IndexOrganismView} />
            </div>
            <div className='col-10'>
              <Route path='/atoms/:atomId' component={ShowAtomView} />
              <Route
                path='/molecules/:moleculeId'
                component={ShowMoleculeView}
              />
              <Route
                path='/organisms/:organismId'
                component={ShowOrganismView}
              />
            </div>
          </div>
        </Suspense>
      </ApplicationLayout>
    </Router>
  );
};

export default AppRoutes;
