import React from 'react';

import styles from './styles.module.css';

export interface Heading3
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Heading3: React.FC<Heading3> = ({ children, ...props }) => {
  return (
    <h3 className={styles.root} {...props}>
      {children}
    </h3>
  );
};
