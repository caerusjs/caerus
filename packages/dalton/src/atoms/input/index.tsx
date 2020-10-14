import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export const Input = ({ children, ...rest }: Props) => {
  return <input className={styles.root} {...rest} />;
};

export const inputProps = {
  placeholder: lorem.word(),
};
