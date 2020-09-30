import titleize from '../../../helpers/titleize';

export const createResourceItem = (name: string) => {
  return `import React from 'react';

import Paragraph from 'atoms/paragraph';
import Button from 'atoms/button';

import { Link } from 'react-router-dom';

import { Get${titleize(name)}sQuery } from 'types/graphql';

interface ${titleize(name)}ItemProps {
  ${name}: Get${titleize(name)}sQuery['get${titleize(name)}s'][0];
  handleRemove: () => void;
}

const ${titleize(name)}Item: React.FC<${titleize(
    name,
  )}ItemProps> = ({ handleRemove, ${name} }) => {
  return (
    <>
      <Paragraph>{${name}.id}</Paragraph>
      <Paragraph>
        <Link to={\`/${name}s/\${${name}.id}\`}>View ${titleize(name)}</Link>
      </Paragraph>
      <Paragraph>
        <Link to={\`/${name}s/\${${name}.id}/edit\`}>Edit ${titleize(
    name,
  )}</Link>
      </Paragraph>
      <Button onClick={handleRemove}>Remove</Button>
    </>
  );
};

export default ${titleize(name)}Item;

`;
};
