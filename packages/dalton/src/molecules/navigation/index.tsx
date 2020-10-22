import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor, AnchorProps } from '../../atoms';

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  links: AnchorProps[];
}

const buildChildren = (links: AnchorProps[]) => {
  return links.map((link) => <Anchor {...link} />);
};

export const Navigation = ({ links, ...rest }: NavigationProps) => {
  return (
    <nav className={styles.root} {...rest}>
      {buildChildren(links)}
    </nav>
  );
};

export const navigationProps = {
  links: [
    {
      href: internet.url(),
      children: lorem.word(),
    },
  ],
};
