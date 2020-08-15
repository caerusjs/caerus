import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Loading from 'molecules/loading'

const ExampleRoutes = lazy(() => import('routes/example.routes'))

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' component={ExampleRoutes} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
