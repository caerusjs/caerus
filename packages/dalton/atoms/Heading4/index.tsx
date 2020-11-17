import { toTitleCase } from '@caerusjs/helpers';
import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface Heading4
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
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
  children: toTitleCase(lorem.words(3)),
};
