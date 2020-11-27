import React from 'react';
import { Anchor, Arrow } from '../../atoms';
import styles from './styles.module.css';

export interface AnchorWithArrow {
  children?: React.ReactNode;
  anchorProps?: Anchor;
}

export const AnchorWithArrow: React.FC<AnchorWithArrow> = ({
  children,
  ...anchorProps
}) => {
  return (
    <div className={styles.root}>
      <Anchor {...anchorProps}>
        {children} <Arrow />
      </Anchor>
    </div>
  );
};
