import React from 'react';
import { name } from 'faker';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading1 = ({ children, ...rest }: Props) => {
  return (
    <h1 className={styles.root} {...rest}>
      {children}
    </h1>
  );
};

export const heading1Props = {
  children: name.jobDescriptor(),
};
