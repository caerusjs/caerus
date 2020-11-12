import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

export interface Paragraph extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph = ({ children, ...props }: Paragraph) => {
  return (
    <p className={styles.root} {...props}>
      {children}
    </p>
  );
};

export const paragraphProps = {
  children: lorem.paragraph(15),
};
