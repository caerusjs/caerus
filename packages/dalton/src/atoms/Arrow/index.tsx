import React from 'react';

import styles from './styles.module.css';
import ArrowImage from './arrow.svg';

export interface Arrow
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export const Arrow = ({ ...props }: Arrow) => {
  return <img className={styles.root} src={ArrowImage} {...props} />;
};

export const arrowProps = {};
