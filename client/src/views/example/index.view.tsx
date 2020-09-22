import React from 'react';

import ApplicationLayout from 'views/layouts/application.layout';

import Example from 'organisms/example';

const ExampleIndex: React.FC = () => {
  return (
    <ApplicationLayout>
      <Example />
    </ApplicationLayout>
  );
};

export default ExampleIndex;
