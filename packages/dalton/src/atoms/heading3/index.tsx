import { toTitleCase } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface Heading3 extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading3 = ({ children, ...props }: Heading3) => {
  return (
    <h3 className={styles.root} {...props}>
      {children}
    </h3>
  );
};

export const heading3Props = {
  children: toTitleCase(lorem.words(3)),
};
