import React from 'react';

import styles from './styles.module.css';

export interface Button
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const Button: React.FC<Button> = ({ children, ...props }) => {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  );
};
