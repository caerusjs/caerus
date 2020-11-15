import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor, UnorderedList } from '../../atoms';

export interface VerticalNavigation {
  anchors: Anchor[];
}

const buildChildren = (anchors: VerticalNavigation['anchors']) => {
  return anchors.map(({ id, ...props }) => (
    <li key={id}>
      <Anchor {...props} />
    </li>
  ));
};

export const VerticalNavigation = ({
  anchors,
  ...props
}: VerticalNavigation) => {
  return (
    <nav className={styles.root} {...props}>
      <UnorderedList>{buildChildren(anchors)}</UnorderedList>
    </nav>
  );
};

export const verticalNavigationProps = {
  anchors: [1, 2, 3, 4, 5].map((id) => ({
    id: id,
    href: internet.url(),
    children: lorem.word(),
  })),
};
