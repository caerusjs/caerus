import titleize from '../../../helpers/titleize';

export const createOrganism = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update',
) => {
  switch (action) {
    case 'GetAll':
      return `import React from 'react';

import useGet${titleize(name)}s from 'organisms/get-${name}s/use-get-${name}s';
import useRemove${titleize(
        name,
      )} from 'organisms/get-${name}s/use-remove-${name}';

import Paragraph from 'atoms/paragraph';
import Error from 'molecules/error';
import Loading from 'molecules/loading';
import ${titleize(name)}Item from 'molecules/${name}-item';

const Get${titleize(name)}s: React.FC = () => {
  const { data, loading, error } = useGet${titleize(name)}s();
  const [remove${titleize(name)}] = useRemove${titleize(name)}();

  if (loading) return <Loading />;
  if (error || !data?.get${titleize(name)}s) return <Error />;

  const { get${titleize(name)}s } = data;

  const ${titleize(name)}s = () => {
    if (!get${titleize(name)}s?.length) {
      return (
        <Paragraph>Please add a ${titleize(name)}</Paragraph>
      );
    } else {
      return get${titleize(name)}s.map((${name}) => {
        const handleRemove = () => {
          remove${titleize(name)}({
            variables: {
              ${name}: {
                id: ${name}.id
              }
            }
          });
        };

        return (
          <${titleize(name)}Item 
            ${name}={${name}} 
            handleRemove={handleRemove} 
            key={${name}.id} 
          />
        );
      });
    };
  };
  
  return (
    <>
      { ${titleize(name)}s() }
    </>
  );
}

export default Get${titleize(name)}s`;

    case 'Get':
      return `import React from 'react';

import useGet${titleize(name)} from 'organisms/get-${name}/use-get-${name}';

import Paragraph from 'atoms/paragraph';
import Error from 'molecules/error';
import Loading from 'molecules/loading';

const Get${titleize(name)}: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useGet${titleize(name)}(id);

  if (loading) return <Loading />;
  if (error || !data?.get${titleize(name)}) return <Error />;

  return (
    <Paragraph>
      {data.get${titleize(name)}.id}
    </Paragraph>
  );
};

export default Get${titleize(name)};
`;

    case 'Add':
      return `import React from 'react';
import { useHistory } from 'react-router-dom';

import { Add${titleize(name)}Input } from 'types/graphql';

import useAdd${titleize(name)} from 'organisms/add-${name}/use-add-${name}';

import ResourceForm from 'molecules/resource-form';
import ${titleize(
        name,
      )}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields';

const Add${titleize(name)}: React.FC = () => {
  const history = useHistory();
  const [add${titleize(name)}] = useAdd${titleize(name)}();

  const add${titleize(name)}Mutation = async (values: Add${titleize(
        name,
      )}Input) => {
    await add${titleize(name)}({
      variables: {
        ${name}: { ...values },
      },
    });

    history.push(\`/${name}s/\`);
  };

  const initial${titleize(name)}Values: Add${titleize(name)}Input = {
    // Add your initial values here
  };

  const handleReturn = () => {
    history.push(\`/${name}s\`);
  };

  const resource = {
    initialValues: initial${titleize(name)}Values,
    handleSubmit: add${titleize(name)}Mutation,
    handleReturn: handleReturn,
    validation: ${name}FormSchema,
    name: '${name}',
    action: 'new',
  };

  return <ResourceForm resource={resource} FormFields={${titleize(
    name,
  )}FormFields} />;
};

export default Add${titleize(name)};
`;

    case 'Update':
      return `import React from 'react';
import { useHistory } from 'react-router-dom';

import { Update${titleize(name)}Input } from 'types/graphql';

import useUpdate${titleize(
        name,
      )} from 'organisms/update-${name}/use-update-${name}';
import useGet${titleize(name)} from 'organisms/get-${name}/use-get-${name}';

import Loading from 'molecules/loading';
import Error from 'molecules/error';
import ${titleize(
        name,
      )}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields';
import ResourceForm from 'molecules/resource-form';

const Update${titleize(name)}: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory();
  const handleReturn = () => {
    history.push(\`/${name}s\`);
  };
  const [update${titleize(name)}] = useUpdate${titleize(name)}();

  const { loading, error, data } = useGet${titleize(name)}(id);

  if (loading) return <Loading />;
  if (error || !data?.get${titleize(name)}) return <Error />;

  const { __typename, ...values } = data.get${titleize(name)};

  const initial${titleize(name)}Values: Update${titleize(name)}Input = {
    ...values,
  };

  const update${titleize(name)}Mutation = async (values: Update${titleize(
        name,
      )}Input) => {
    await update${titleize(name)}({
      variables: {
        ${name}: { ...values },
      },
    });

    handleReturn();
  };

  const resource = {
    name: '${name}',
    action: 'edit',
    handleReturn: handleReturn,
    validation: ${name}FormSchema,
    initialValues: initial${titleize(name)}Values,
    handleSubmit: update${titleize(name)}Mutation,
  };

  return <ResourceForm resource={resource} FormFields={${titleize(
    name,
  )}FormFields} />;
};

export default Update${titleize(name)};
      
`;
  }
};
