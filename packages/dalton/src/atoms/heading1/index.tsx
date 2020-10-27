import React from 'react';
import { lorem } from 'faker';
import { toTitleCase } from '@caerusjs/helpers';

import styles from './styles.module.css';

export interface Heading1 extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading1 = ({ children, ...props }: Heading1) => {
  return (
    <h1 className={styles.root} {...props}>
      {children}
    </h1>
  );
};

export const heading1Props = {
  children: toTitleCase(lorem.words(3)),
};
