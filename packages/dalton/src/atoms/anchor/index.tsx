import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const Anchor = ({ children, ...rest }: AnchorProps) => {
  return (
    <a className={styles.root} {...rest}>
      {children}
    </a>
  );
};

export const anchorProps = {
  href: internet.url(),
  children: lorem.word(),
};
