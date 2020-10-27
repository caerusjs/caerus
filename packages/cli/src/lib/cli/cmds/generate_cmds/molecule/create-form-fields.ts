import { toTitleCase } from '@caerusjs/helpers';

export const createFormFields = (name: string) => {
  return `import React from 'react';
import { object } from 'yup';

import { FormFields } from 'types/caerus';

export const ${name}FormSchema = object().shape({
});

const ${toTitleCase(
    name,
  )}FormFields: React.FC<FormFields> = ({ touched, errors, handleChange, values }) => {
  return (
    <>
      Replace with your form fields {touched}, {errors}, {handleChange}, {values} https://formik.org/docs/api/field
    </>
  );
};


export default ${toTitleCase(name)}FormFields;
`;
};
