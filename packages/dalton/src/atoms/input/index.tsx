import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export const Input = ({ children, ...rest }: InputProps) => {
  return <input className={styles.root} {...rest} />;
};

export const inputProps = {
  placeholder: lorem.word(),
};
