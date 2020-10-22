import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return (
    <p className={styles.root} {...rest}>
      {children}
    </p>
  );
};

export const paragraphProps = {
  children: lorem.paragraph(15),
};
