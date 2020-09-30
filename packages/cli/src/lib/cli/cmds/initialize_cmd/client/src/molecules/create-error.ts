export const createError = () => {
  return `import React from 'react';

import Paragraph from 'atoms/paragraph';

import styles from './error.module.css';

const Error: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className={styles.root}>
      <Paragraph>
        {message ??
          'There has been a problem trying to load the related resource.  Please try again later.'}
      </Paragraph>
    </div>
  );
};

export default Error;
  
`;
};
