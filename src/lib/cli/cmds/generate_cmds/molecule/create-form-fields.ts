import titleize from '../../../helpers/titleize'

export const createFormFields = (name: string) => {
  return (`import React from 'react'
import { string, object, number } from 'yup'
import { Field } from 'formik'

import { IFormFields } from 'types/props'

export const ${name}FormSchema = object().shape({
})

const ${titleize(name)}FormFields: React.FC<IFormFields> = ({ touched, errors, handleChange, values }) => {
  return (
    <>
      Replace with your form fields
    </>
  )
}


export default ${titleize(name)}FormFields
`)
}