import React from 'react';

import styles from './styles.module.css';

export interface Heading4
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Heading4: React.FC<Heading4> = ({ children, ...props }) => {
  return (
    <h4 className={styles.root} {...props}>
      {children}
    </h4>
  );
};
