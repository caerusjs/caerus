import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';

export interface Anchor
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode;
}

export const Anchor = ({ children, ...props }: Anchor) => {
  return (
    <a className={styles.root} {...props}>
      {children}
    </a>
  );
};

export const anchorProps = {
  href: internet.url(),
  children: lorem.word(),
};
