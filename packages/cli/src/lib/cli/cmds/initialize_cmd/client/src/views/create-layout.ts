export const createLayout = () => {
  return `import React from 'react';

const ApplicationLayout: React.FC = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ApplicationLayout;
`;
};
