import { titleize } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Heading2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading2 = ({ children, ...rest }: Heading2Props) => {
  return (
    <h2 className={styles.root} {...rest}>
      {children}
    </h2>
  );
};

export const heading2Props = {
  children: titleize(lorem.words(3)),
};
