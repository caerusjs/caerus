import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button className={styles.root} {...rest}>
      {children}
    </button>
  );
};

export const buttonProps = {
  children: lorem.word(),
};
