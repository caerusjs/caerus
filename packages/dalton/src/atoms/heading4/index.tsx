import { titleize } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Heading4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading4 = ({ children, ...rest }: Heading4Props) => {
  return (
    <h4 className={styles.root} {...rest}>
      {children}
    </h4>
  );
};

export const heading4Props = {
  children: titleize(lorem.words(3)),
};
