import { name } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Heading2 = ({ children, ...rest }: Props) => {
  return (
    <h2 className={styles.root} {...rest}>
      {children}
    </h2>
  );
};

export const heading2Props = {
  children: name.jobDescriptor(),
};
