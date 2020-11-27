export const createLoadingSpinner = () => {
  return `import React from 'react';
import ReactLoading from 'react-loading';

import styles from './loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.root}>
      <ReactLoading type='spin' color={'#ee6a53'} delay={1000} />
    </div>
  );
};

export default Loading;
`;
};
