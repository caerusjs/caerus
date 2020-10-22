import { titleize } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface Heading4 extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading4 = ({ children, ...props }: Heading4) => {
  return (
    <h4 className={styles.root} {...props}>
      {children}
    </h4>
  );
};

export const heading4Props = {
  children: titleize(lorem.words(3)),
};
