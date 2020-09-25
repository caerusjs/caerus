import React from 'react';

import styles from './heading1.module.css';

export const Heading1: React.FC = ({ children }) => {
  return <h1 className={styles.root}>{children}</h1>;
};
