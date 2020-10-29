import React from 'react';

import styles from './styles.module.css';
import ArrowImage from './arrow.svg';

export const Arrow = (props: React.HTMLAttributes<HTMLImageElement>) => {
  return <img className={styles.root} src={ArrowImage} {...props} />;
};

export const arrowProps = {};
