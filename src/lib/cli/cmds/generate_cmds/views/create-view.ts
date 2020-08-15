import titleize from '../../../helpers/titleize'

export const createView = (name: string, action: 'New' | 'Edit' | 'Show' | 'Index') => {
  switch (action) {
    case 'New':
      return (`import React from 'react'

import New${titleize(name)}Form from 'organisms/add-${titleize(name)}-form'
import ApplicationLayout from 'views/layouts/application.layout'

const New${titleize(name)}View: React.FC = () => {

  return (
    <ApplicationLayout>
      <New${titleize(name)}Form />
    </ApplicationLayout>
  )
}

export default New${titleize(name)}View`)

    case 'Edit':
      return (`import React from 'react'
import { useParams } from 'react-router-dom'

import Edit${titleize(name)}Form from 'organisms/update-${titleize(name)}-form'
import ApplicationLayout from 'views/layouts/application.layout'

const Edit${titleize(name)}View: React.FC = () => {
  const { id } = useParams()

  return (
    <ApplicationLayout>
      <Edit${titleize(name)}Form id={id as string} />
    </ApplicationLayout>
  )
}

export default Edit${titleize(name)}View
`)

    case 'Index':
      return (`import React from 'react'

const Index${titleize(name)}View: React.FC = () => {
  return (
    <ApplicationLayout>
      <Get${titleize(name)}s />
    </ApplicationLayout>
  )
}

export default Index${titleize(name)}View
`)

    case 'Show':
      return (`import React from 'react'
import { useParams } from 'react-router-dom'

import Get${titleize(name)} from 'organisms/application.layout'
import ApplicationLayout from 'views/layouts/application.layout'

const Show${titleize(name)}View: React.FC = () => {
  const { id } = useParams()

  return (
    <ApplicationLayout>
      <Get${titleize(name)} id={id as string} />
    </ApplicationLayout>
  )
}

export default Show${titleize(name)}View
`)
  }
}