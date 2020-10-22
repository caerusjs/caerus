import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

export interface Input extends React.HTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: Input) => {
  return <input className={styles.root} {...props} />;
};

export const inputProps = {
  placeholder: lorem.word(),
};
