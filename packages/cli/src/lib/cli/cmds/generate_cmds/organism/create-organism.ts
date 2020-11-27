import { toTitleCase } from '@caerusjs/client-helpers';

export const createOrganism = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update',
) => {
  switch (action) {
    case 'GetAll':
      return `import React from 'react';

import useGet${toTitleCase(
        name,
      )}s from 'organisms/get-${name}s/use-get-${name}s';
import useRemove${toTitleCase(
        name,
      )} from 'organisms/get-${name}s/use-remove-${name}';

import Paragraph from 'atoms/paragraph';
import Error from 'molecules/error';
import Loading from 'molecules/loading';
import ${toTitleCase(name)}Item from 'molecules/${name}-item';

const Get${toTitleCase(name)}s: React.FC = () => {
  const { data, loading, error } = useGet${toTitleCase(name)}s();
  const [remove${toTitleCase(name)}] = useRemove${toTitleCase(name)}();

  if (loading) return <Loading />;
  if (error || !data?.get${toTitleCase(name)}s) return <Error />;

  const { get${toTitleCase(name)}s } = data;

  const ${toTitleCase(name)}s = () => {
    if (!get${toTitleCase(name)}s?.length) {
      return (
        <Paragraph>Please add a ${toTitleCase(name)}</Paragraph>
      );
    } else {
      return get${toTitleCase(name)}s.map((${name}) => {
        const handleRemove = () => {
          remove${toTitleCase(name)}({
            variables: {
              ${name}: {
                id: ${name}.id
              }
            }
          });
        };

        return (
          <${toTitleCase(name)}Item 
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
      { ${toTitleCase(name)}s() }
    </>
  );
}

export default Get${toTitleCase(name)}s`;

    case 'Get':
      return `import React from 'react';

import useGet${toTitleCase(name)} from 'organisms/get-${name}/use-get-${name}';

import Paragraph from 'atoms/paragraph';
import Error from 'molecules/error';
import Loading from 'molecules/loading';

const Get${toTitleCase(name)}: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useGet${toTitleCase(name)}(id);

  if (loading) return <Loading />;
  if (error || !data?.get${toTitleCase(name)}) return <Error />;

  return (
    <Paragraph>
      {data.get${toTitleCase(name)}.id}
    </Paragraph>
  );
};

export default Get${toTitleCase(name)};
`;

    case 'Add':
      return `import React from 'react';
import { useHistory } from 'react-router-dom';

import { Add${toTitleCase(name)}Input } from 'types/graphql';

import useAdd${toTitleCase(name)} from 'organisms/add-${name}/use-add-${name}';

import ResourceForm from 'molecules/resource-form';
import ${toTitleCase(
        name,
      )}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields';

const Add${toTitleCase(name)}: React.FC = () => {
  const history = useHistory();
  const [add${toTitleCase(name)}] = useAdd${toTitleCase(name)}();

  const add${toTitleCase(name)}Mutation = async (values: Add${toTitleCase(
        name,
      )}Input) => {
    await add${toTitleCase(name)}({
      variables: {
        ${name}: { ...values },
      },
    });

    history.push(\`/${name}s/\`);
  };

  const initial${toTitleCase(name)}Values: Add${toTitleCase(name)}Input = {
    // Add your initial values here
  };

  const handleReturn = () => {
    history.push(\`/${name}s\`);
  };

  const resource = {
    initialValues: initial${toTitleCase(name)}Values,
    handleSubmit: add${toTitleCase(name)}Mutation,
    handleReturn: handleReturn,
    validation: ${name}FormSchema,
    name: '${name}',
    action: 'new',
  };

  return <ResourceForm resource={resource} FormFields={${toTitleCase(
    name,
  )}FormFields} />;
};

export default Add${toTitleCase(name)};
`;

    case 'Update':
      return `import React from 'react';
import { useHistory } from 'react-router-dom';

import { Update${toTitleCase(name)}Input } from 'types/graphql';

import useUpdate${toTitleCase(
        name,
      )} from 'organisms/update-${name}/use-update-${name}';
import useGet${toTitleCase(name)} from 'organisms/get-${name}/use-get-${name}';

import Loading from 'molecules/loading';
import Error from 'molecules/error';
import ${toTitleCase(
        name,
      )}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields';
import ResourceForm from 'molecules/resource-form';

const Update${toTitleCase(name)}: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory();
  const handleReturn = () => {
    history.push(\`/${name}s\`);
  };
  const [update${toTitleCase(name)}] = useUpdate${toTitleCase(name)}();

  const { loading, error, data } = useGet${toTitleCase(name)}(id);

  if (loading) return <Loading />;
  if (error || !data?.get${toTitleCase(name)}) return <Error />;

  const { __typename, ...values } = data.get${toTitleCase(name)};

  const initial${toTitleCase(name)}Values: Update${toTitleCase(name)}Input = {
    ...values,
  };

  const update${toTitleCase(name)}Mutation = async (values: Update${toTitleCase(
        name,
      )}Input) => {
    await update${toTitleCase(name)}({
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
    initialValues: initial${toTitleCase(name)}Values,
    handleSubmit: update${toTitleCase(name)}Mutation,
  };

  return <ResourceForm resource={resource} FormFields={${toTitleCase(
    name,
  )}FormFields} />;
};

export default Update${toTitleCase(name)};
      
`;
  }
};
