import React from 'react';

import styles from './styles.module.css';

export interface Input
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<Input> = ({ ...props }) => {
  return <input className={styles.root} {...props} />;
};
