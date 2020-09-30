import React from 'react';

import styles from './paragraph.module.css';

const Paragraph: React.FC = ({ children }) => {
  return <p className={styles.root}>{children}</p>;
};

export default Paragraph;