import titleize from '../../../helpers/titleize'

export const createView = (name: string, action: 'New' | 'Edit' | 'Show' | 'Index') => {
  switch (action) {
    case 'New':
      return (``)

    case 'Edit':
      return (``)

    case 'Index':
      return (`import React from 'react'
import { useParams } from 'react-router-dom'

const ${action}${titleize(name)}View: React.FC = () => {
  
  return (

  )
}

export default ${action}${titleize(name)}View
`)

    case 'Show':
      return (`import React from 'react'

const ${action}${titleize(name)}View: React.FC = () => {

  return (

  )
}

export default ${action}${titleize(name)}View
`)
}