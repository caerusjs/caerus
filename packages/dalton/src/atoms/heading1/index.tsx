import React from 'react';

import styles from './heading1.module.css';

interface Heading1Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Heading1 = ({ children, ...rest }: Heading1Props) => {
  return (
    <h1 className={styles.root} {...rest}>
      {children}
    </h1>
  );
};

export const props = {
  children: 'Aruna Ratanagiri',
};
