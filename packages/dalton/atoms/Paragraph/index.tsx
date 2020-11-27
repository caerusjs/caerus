import React from 'react';

import styles from './styles.module.css';

export interface Paragraph
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Paragraph: React.FC<Paragraph> = ({ children, ...props }) => {
  return (
    <p className={styles.root} {...props}>
      {children}
    </p>
  );
};
