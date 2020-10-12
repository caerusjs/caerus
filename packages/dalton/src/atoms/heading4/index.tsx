import { name } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading4 = ({ children, ...rest }: Props) => {
  return (
    <h4 className={styles.root} {...rest}>
      {children}
    </h4>
  );
};

export const heading4Props = {
  children: name.jobDescriptor(),
};
