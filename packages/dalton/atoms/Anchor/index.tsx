import React, { RefObject } from 'react';

import styles from './styles.module.css';

export interface Anchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  ref?: RefObject<HTMLAnchorElement>;
  referrerPolicy?: any;
}

export const Anchor: React.FC<Anchor> = ({ children, ...props }) => {
  return (
    <a className={styles.root} {...props}>
      {children}
    </a>
  );
};
