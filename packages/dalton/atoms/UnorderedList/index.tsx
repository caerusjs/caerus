import React from 'react';

import styles from './styles.module.css';

export interface UnorderedList
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: React.ReactNode;
}

export const UnorderedList: React.FC<UnorderedList> = ({
  children,
  ...props
}) => {
  return (
    <ul className={styles.root} {...props}>
      {children}
    </ul>
  );
};
