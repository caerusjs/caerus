import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface UnorderedList
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: React.ReactNode;
}

export const UnorderedList = ({ children, ...props }: UnorderedList) => {
  return (
    <ul className={styles.root} {...props}>
      {children}
    </ul>
  );
};

export const unorderedListProps = {
  children: lorem.paragraph(15),
};
