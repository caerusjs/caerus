export const createPropTypes = () => {
  return `import { FormikTouched, FormikErrors } from 'formik';
import { ObjectSchema } from 'yup';
  
export type Resource = {
  initialValues: object;
  name: string;
  action: string;
  validation?: ObjectSchema;
  handleReturn(): void;
  handleSubmit(values: object): void;
}

export type FormFields = {
  values: any;
  touched: FormikTouched<any>;
  errors: FormikErrors<any>;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

export type ResourceFormProps = {
  FormFields: React.FC<FormFields>;
  resource: Resource;
}`;
};
