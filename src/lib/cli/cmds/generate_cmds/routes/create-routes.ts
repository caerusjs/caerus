import titleize from '../../../helpers/titleize'

export const createRoutes = (name: string) => {
  return (`import React, { lazy } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'

const Show${titleize(name)}View = lazy(() => import('views/${name}/show'))
const Index${titleize(name)}View = lazy(() => import('views/${name}/index'))
const New${titleize(name)}View = lazy(() => import('views/${name}/new'))
const Edit${titleize(name)}View = lazy(() => import('views/${name}/edit'))

const ${titleize(name)}Routes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/${name}/:${name}Id/edit' component={Edit${titleize(name)}View} />
      <Route path='/${name}/new' component={New${titleize(name)}View} />
      <Route path='/${name}/:${name}Id' component={Show${titleize(name)}View} />
      <Route path='/${name}/' component={Index${titleize(name)}View} />
    </Switch>
  )
}

export default ${titleize(name)}Routes`
  )
}