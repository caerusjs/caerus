import React from 'react';
import Link from 'next/link';

import { AnchorLink, Heading1, Heading2 } from '../../atoms';
import { Navigation } from '../../molecules';

import styles from './styles.module.css';

export interface NavigationBar {
  href: string;
  heading1: string;
  heading2?: string;
  navigationProps: Navigation;
}

export const NavigationBar: React.FC<NavigationBar> = ({
  href,
  heading1,
  heading2,
  navigationProps,
}) => {
  return (
    <div className={styles.root}>
      <Link href={href} passHref>
        <AnchorLink>
          <Heading1>{heading1}</Heading1>
          {heading2 && <Heading2>{heading2}</Heading2>}
        </AnchorLink>
      </Link>
      <Navigation {...navigationProps} />
    </div>
  );
};
