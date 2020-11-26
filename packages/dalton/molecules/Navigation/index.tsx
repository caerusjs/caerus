import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';
import { Anchor, AnchorLink, UnorderedList } from '../../atoms';

export interface Navigation extends React.HTMLAttributes<HTMLElement> {
  anchors: Anchor[];
}

const buildChildren = (anchors: Navigation['anchors']) => {
  return anchors.map(({ id, ...props }) => (
    <li key={id}>
      <Link href={props.href!} passHref>
        <AnchorLink {...props} />
      </Link>
    </li>
  ));
};

export const Navigation: React.FC<Navigation> = ({ anchors, ...props }) => {
  return (
    <nav className={styles.root} {...props}>
      <UnorderedList>{buildChildren(anchors)}</UnorderedList>
    </nav>
  );
};
