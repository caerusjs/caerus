export const createPropTypes = () => {
  return (`import { FormikTouched, FormikErrors } from "formik"
import { ObjectSchema } from "yup"
  
export type IResource = {
  initialValues: object
  name: string
  action: string
  validation?: ObjectSchema
  handleReturn(): void
  handleSubmit(values: object): void
}

export type IFormFields = {
  values: any
  touched: FormikTouched<any>
  errors: FormikErrors<any>
  handleChange: (e: React.ChangeEvent<any>) => void
}

export type IResourceFormProps = {
  FormFields: React.FC<IFormFields>
  resource: IResource
}`)
}