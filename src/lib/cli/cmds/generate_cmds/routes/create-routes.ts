import titleize from '../../../helpers/titleize'

export const createRoutes = (name: string) => {
  return (`import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import Show${titleize(name)}View from 'views/${name}/show'
import Index${titleize(name)}View from 'views/${name}/index'
import New${titleize(name)}View from 'views/${name}/new'
import Edit${titleize(name)}View from 'views/${name}/edit'

const ${titleize(name)}Routes: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Route path='/new' component={New${titleize(name)}View} />
      <Route path='/edit' component={Edit${titleize(name)}View} />
      <Route path='/:id' component={Show${titleize(name)}View} />
      <Route path='/' component={Index${titleize(name)}View} />
    </>
  )
}

export default ${titleize(name)}Routes`
  )
}