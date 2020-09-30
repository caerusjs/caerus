import React from 'react';
import { object } from 'yup';

import { FormFields } from 'types/caerus';

export const atomFormSchema = object().shape({
});

const AtomFormFields: React.FC<FormFields> = ({ touched, errors, handleChange, values }) => {
  return (
    <>
      Replace with your form fields {touched}, {errors}, {handleChange}, {values} https://formik.org/docs/api/field
    </>
  );
};


export default AtomFormFields;
