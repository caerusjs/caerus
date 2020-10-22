import { titleize } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Heading3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading3 = ({ children, ...rest }: Heading3Props) => {
  return (
    <h3 className={styles.root} {...rest}>
      {children}
    </h3>
  );
};

export const heading3Props = {
  children: titleize(lorem.words(3)),
};
