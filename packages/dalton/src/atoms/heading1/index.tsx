import React from 'react';
import { lorem } from 'faker';
import { titleize } from '@caerusjs/helpers';

import styles from './styles.module.css';

interface Heading1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading1 = ({ children, ...rest }: Heading1Props) => {
  return (
    <h1 className={styles.root} {...rest}>
      {children}
    </h1>
  );
};

export const heading1Props = {
  children: titleize(lorem.words(3)),
};
