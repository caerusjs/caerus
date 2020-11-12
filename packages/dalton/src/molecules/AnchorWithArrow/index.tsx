import { internet, lorem } from 'faker';
import React from 'react';
import { Anchor, Arrow } from '../../atoms';
import styles from './styles.module.css';

export interface AnchorWithArrow extends React.HTMLAttributes<HTMLElement> {
  anchorProps?: Anchor;
}

export const AnchorWithArrow = ({
  children,
  ...anchorProps
}: AnchorWithArrow) => {
  return (
    <Anchor {...anchorProps}>
      {children} <Arrow className={styles.arrow} />
    </Anchor>
  );
};

export const anchorWithArrowProps = {
  children: lorem.word(),
  href: internet.url(),
};
