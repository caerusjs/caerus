import React from 'react';
import { internet, lorem } from 'faker';
import Link from 'next/link';

import styles from './styles.module.css';
import { Anchor, UnorderedList } from '../../atoms';

export interface Navigation {
  anchors: Anchor[];
}

const buildChildren = (anchors: Navigation['anchors']) => {
  return anchors.map(({ id, href, ...props }) => (
    <li key={id}>
      <Link href={href!}>
        <Anchor {...props} />
      </Link>
    </li>
  ));
};

export const Navigation = ({ anchors, ...props }: Navigation) => {
  return (
    <nav className={styles.root} {...props}>
      <UnorderedList>{buildChildren(anchors)}</UnorderedList>
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
