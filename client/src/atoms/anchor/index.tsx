import React from 'react';

import styles from './anchor.module.css';

const Anchor: React.FC = ({ children }) => {
  return <a className={styles.root}>{children}</a>;
};

export default Anchor;
  