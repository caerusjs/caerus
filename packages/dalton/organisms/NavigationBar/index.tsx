import { toTitleCase } from '@caerusjs/helpers/dist';
import { internet, lorem } from 'faker';
import React from 'react';
import Link from 'next/link';

import { Anchor, Heading1, Heading2 } from '../../atoms';
import { Navigation } from '../../molecules';

import styles from './styles.module.css';

export interface NavigationBar {
  href: string;
  heading1: string;
  heading2?: string;
  navigationProps: Navigation;
}

export const NavigationBar = ({
  href,
  heading1,
  heading2,
  navigationProps,
}: NavigationBar) => {
  return (
    <div className={styles.root}>
      <Link href={href}>
        <Anchor>
          <Heading1>{heading1}</Heading1>
          {heading2 && <Heading2>{heading2}</Heading2>}
        </Anchor>
      </Link>
      <Navigation {...navigationProps} />
    </div>
  );
};

export const navigationBarProps = {
  href: internet.url(),
  heading1: toTitleCase(lorem.words(3)),
  heading2: toTitleCase(lorem.words(3)),
  navigationProps: {
    anchors: [1, 2, 3, 4, 5].map((id) => ({
      id: id,
      href: internet.url(),
      children: lorem.word(),
    })),
  },
};
