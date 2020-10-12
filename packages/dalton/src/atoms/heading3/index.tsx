import { name } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading3 = ({ children, ...rest }: Props) => {
  return (
    <h3 className={styles.root} {...rest}>
      {children}
    </h3>
  );
};

export const heading3Props = {
  children: name.jobDescriptor(),
};
