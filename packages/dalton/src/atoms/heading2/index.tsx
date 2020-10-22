import { titleize } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface Heading2 extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading2 = ({ children, ...props }: Heading2) => {
  return (
    <h2 className={styles.root} {...props}>
      {children}
    </h2>
  );
};

export const heading2Props = {
  children: titleize(lorem.words(3)),
};
