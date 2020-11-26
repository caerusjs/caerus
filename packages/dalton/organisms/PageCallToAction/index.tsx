import React from 'react';

import { TitleDescriptionLinkArrow } from '../../molecules/TitleDescriptionLinkArrow';

import styles from './styles.module.css';

export interface PageCallToAction {
  titleDescriptionLinkArrowProps: TitleDescriptionLinkArrow;
  backgroundImage: string;
}

export const PageCallToAction: React.FC<PageCallToAction> = ({
  titleDescriptionLinkArrowProps,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.divider}>
        <TitleDescriptionLinkArrow {...titleDescriptionLinkArrowProps} />
      </div>
    </div>
  );
};
