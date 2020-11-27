import { toTitleCase } from '@caerusjs/client-helpers';

export const createResourceItem = (name: string) => {
  return `import React from 'react';

import Paragraph from 'atoms/paragraph';
import Button from 'atoms/button';

import { Link } from 'react-router-dom';

import { Get${toTitleCase(name)}sQuery } from 'types/graphql';

interface ${toTitleCase(name)}ItemProps {
  ${name}: Get${toTitleCase(name)}sQuery['get${toTitleCase(name)}s'][0];
  handleRemove: () => void;
}

const ${toTitleCase(name)}Item: React.FC<${toTitleCase(
    name,
  )}ItemProps> = ({ handleRemove, ${name} }) => {
  return (
    <>
      <Paragraph>{${name}.id}</Paragraph>
      <Paragraph>
        <Link to={\`/${name}s/\${${name}.id}\`}>View ${toTitleCase(name)}</Link>
      </Paragraph>
      <Paragraph>
        <Link to={\`/${name}s/\${${name}.id}/edit\`}>Edit ${toTitleCase(
    name,
  )}</Link>
      </Paragraph>
      <Button onClick={handleRemove}>Remove</Button>
    </>
  );
};

export default ${toTitleCase(name)}Item;

`;
};
