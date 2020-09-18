import titleize from '../../../helpers/titleize';

export const createFormFields = (name: string) => {
  return `import React from 'react';
import { object } from 'yup';

import { FormFields } from 'types/props';

export const ${name}FormSchema = object().shape({
});

const ${titleize(
    name,
  )}FormFields: React.FC<FormFields> = ({ touched, errors, handleChange, values }) => {
  return (
    <>
      Replace with your form fields {touched}, {errors}, {handleChange}, {values} https://formik.org/docs/api/field
    </>
  );
};


export default ${titleize(name)}FormFields;
`;
};
