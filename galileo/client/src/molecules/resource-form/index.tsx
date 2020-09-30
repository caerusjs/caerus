import React from 'react';
  import { Formik, Form } from 'formik';
  
  import { ResourceFormProps } from 'types/caerus';
  
  const ResourceForm: React.FC<ResourceFormProps> = ({
    FormFields,
    resource,
  }) => {
    return (
      <Formik
        validationSchema={resource.validation}
        onSubmit={async (values, actions) => {
          try {
            await resource.handleSubmit(values);
          } catch (error) {
            console.error(error);
            const messages = JSON.parse(
              error.message.split('GraphQL error: ')[1],
            );
  
            messages.forEach(
              ({ field, message }: { field: string; message: string }) => {
                actions.setFieldError(field, message);
              },
            );
          }
        }}
        initialValues={resource.initialValues}
      >
        {({ handleChange, values, touched, errors }) => {
          return (
            <Form
              noValidate
              data-testid={`${resource.action}${resource.name}Form`}
            >
              <span
                data-testid={`cancel${resource.action}${resource.name}`}
                onClick={resource.handleReturn}
              >
                Back
              </span>
              <button
                type="submit"
                data-testid={`submit${resource.action}${resource.name}Form`}
              >
                Done
              </button>
              <h5>
                {resource.action} {resource.name}
              </h5>
              <FormFields
                values={values}
                touched={touched}
                errors={errors}
                handleChange={handleChange}
              />
            </Form>
          );
        }}
      </Formik>
    );
  };
  
  export default ResourceForm;
  
