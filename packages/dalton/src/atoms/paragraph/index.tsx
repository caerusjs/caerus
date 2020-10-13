import { lorem } from 'faker';
import React from 'react';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph = ({ children, ...rest }: Props) => {
  return (
    <p className={styles.root} {...rest}>
      {children}
    </p>
  );
};

export const paragraphProps = {
  children: lorem.paragraph(15),
};
