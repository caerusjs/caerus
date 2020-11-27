import React from 'react';

import styles from './styles.module.css';
import { Anchor, UnorderedList } from '../../atoms';

export interface VerticalNavigation extends React.HTMLAttributes<HTMLElement> {
  anchors: Anchor[];
}

const buildChildren = (anchors: VerticalNavigation['anchors']) => {
  return anchors.map(({ id, ...props }) => (
    <li key={id}>
      <Anchor {...props} />
    </li>
  ));
};

export const VerticalNavigation: React.FC<VerticalNavigation> = ({
  anchors,
  ...props
}) => {
  return (
    <nav className={styles.root} {...props}>
      <UnorderedList>{buildChildren(anchors)}</UnorderedList>
    </nav>
  );
};
