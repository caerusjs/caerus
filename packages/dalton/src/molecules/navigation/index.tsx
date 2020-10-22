import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor } from '../../atoms';

interface Navigation extends React.HTMLAttributes<HTMLElement> {
  anchors: Anchor[];
}

const buildChildren = (anchors: Anchor[]) => {
  return anchors.map(({ id, ...props }) => (
    <li>
      <Anchor {...props} key={id} />
    </li>
  ));
};

export const Navigation = ({ anchors, ...props }: Navigation) => {
  return (
    <nav className={styles.root} {...props}>
      <ul>{buildChildren(anchors)}</ul>
    </nav>
  );
};

export const navigationProps = {
  anchors: [1, 2, 3, 4, 5].map((id) => ({
    id: id,
    href: internet.url(),
    children: lorem.word(),
  })),
};
