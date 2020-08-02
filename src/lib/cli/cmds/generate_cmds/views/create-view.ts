import titleize from '../../../helpers/titleize'

export const createView = (name: string, type: 'New' | 'Edit' | 'Show' | 'Index') => {
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