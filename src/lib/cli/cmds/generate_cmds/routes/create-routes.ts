import titleize from '../../../helpers/titleize'

export const createRoutes = (name: string) => {
  return (`import React, { lazy } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'

const Show${titleize(name)}View = lazy(() => import('views/${name}/show.view'))
const Index${titleize(name)}View = lazy(() => import('views/${name}/index.view'))
const New${titleize(name)}View = lazy(() => import('views/${name}/new.view'))
const Edit${titleize(name)}View = lazy(() => import('views/${name}/edit.view'))

const ${titleize(name)}Routes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/${name}s/:${name}Id/edit' component={Edit${titleize(name)}View} />
      <Route path='/${name}s/new' component={New${titleize(name)}View} />
      <Route path='/${name}s/:${name}Id' component={Show${titleize(name)}View} />
      <Route path='/${name}s/' component={Index${titleize(name)}View} />
    </Switch>
  )
}

export default ${titleize(name)}Routes`
  )
}