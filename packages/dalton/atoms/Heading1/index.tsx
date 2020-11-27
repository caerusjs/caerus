import React from 'react';

import styles from './styles.module.css';

export interface Heading1
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Heading1: React.FC<Heading1> = ({ children, ...props }) => {
  return (
    <h1 className={styles.root} {...props}>
      {children}
    </h1>
  );
};
