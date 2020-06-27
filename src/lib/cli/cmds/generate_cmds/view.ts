import { Argv } from 'yargs'

import { createFile } from '../../helpers/create-file'
import titleize from '../../helpers/titleize'

export const command = 'views [name]'
export const describe = 'Generate views named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createFile(`${process.cwd()}/client/src/routes/`, `${argv.name}.tsx`,  createRoute(argv.name))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `new.tsx`,  createView(argv.name, 'New'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `edit.tsx`,  createView(argv.name, 'Edit'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `show.tsx`,  createView(argv.name, 'Show'))
  createFile(`${process.cwd()}/client/src/views/${argv.name}/`, `index.tsx`,  createView(argv.name, 'Index'))
}

const createRoute = (name: string) => {
  return (`import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import ApplicationLayout from 'views/layouts/application.layout'
import Show${titleize(name)}View from 'views/${name}/show'
import Index${titleize(name)}View from 'views/${name}/index'
import New${titleize(name)}View from 'views/${name}/new'
import Edit${titleize(name)}View from 'views/${name}/edit'

const ${titleize(name)}Routes<RouteComponentProps>: React.FC = () => {
  return (
    <Route path='${name}/new' component={New${titleize(name)}View} />
    <Route path='${name}/edit' component={Edit${titleize(name)}View} />
    <Route path='${name}/:id' component={Show${titleize(name)}View} />
    <Route path='${name}' component={Index${titleize(name)}View} />
  )
}

export default ${titleize(name)}Routes`
  )
}

const createView = (name: string, type: 'New' | 'Edit' | 'Show' | 'Index') => {
  let addParams = ''
  let importParams = ''
  

  if (type === 'Edit' || type === 'Show') {
    addParams = 'const { id } = useParams()'
    importParams = "import { useParams } from 'react-router-dom'"
  }

  return (`import React from 'react'
${importParams}

const ${type}${titleize(name)}View: React.FC = () => {
  ${addParams}
  return (

  )
}

export default ${type}${titleize(name)}View
`)
}
