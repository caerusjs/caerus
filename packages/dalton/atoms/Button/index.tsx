import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

export interface Button
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Button) => {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  );
};

export const buttonProps = {
  children: lorem.word(),
};
