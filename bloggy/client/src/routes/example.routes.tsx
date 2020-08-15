import React, { lazy } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

const ExampleIndex = lazy(() => import('views/example/index.view'))

const ExampleRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Route path='/' component={ExampleIndex} />
  )
}

export default ExampleRoutes