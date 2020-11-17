import { internet, lorem } from 'faker';
import React from 'react';
import { Anchor, Arrow } from '../../atoms';
import styles from './styles.module.css';

export interface AnchorWithArrow {
  children?: React.ReactNode;
  anchorProps?: Anchor;
}

export const AnchorWithArrow = ({
  children,
  ...anchorProps
}: AnchorWithArrow) => {
  return (
    <div className={styles.root}>
      <Anchor {...anchorProps}>
        {children} <Arrow />
      </Anchor>
    </div>
  );
};

export const anchorWithArrowProps = {
  children: lorem.word(),
  href: internet.url(),
};
