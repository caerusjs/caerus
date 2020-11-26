import React from 'react';

import styles from './styles.module.css';

export interface Heading2
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Heading2: React.FC<Heading2> = ({ children, ...props }) => {
  return (
    <h2 className={styles.root} {...props}>
      {children}
    </h2>
  );
};
