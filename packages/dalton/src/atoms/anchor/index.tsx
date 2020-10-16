import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}
// hello
export const Anchor = ({ children, ...rest }: Props) => {
  return (
    <a className={styles.root} {...rest}>
      {children}
    </a>
  );
};

export const anchorProps = {
  children: lorem.word(),
};
