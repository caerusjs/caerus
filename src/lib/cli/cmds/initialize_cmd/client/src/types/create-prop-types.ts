export const createPropTypes = () => {
  return (`  export type IResource = {
  initialValues: object
  name: string
  action: string
  validation?: ObjectSchema
  handleReturn(): void
  handleSubmit(values: object): void
}

export type IFormFields = {
  values: object
  touched: FormikTouched<any>
  errors: FormikErrors<any>
  handleChange: (e: React.ChangeEvent<any>) => void
}

export type IResourceFormProps = {
  FormFields: React.FC<IFormFields>
  resource: IResource
}`)
}