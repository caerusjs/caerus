import React from 'react';

import styles from './styles.module.css';
import { Anchor, Paragraph, Heading2 } from '../../atoms';
import { AnchorWithArrow } from '../AnchorWithArrow';

export interface TitleDescriptionLinkArrow
  extends React.HTMLAttributes<HTMLElement> {
  heading2Props: Heading2;
  paragraphProps: Paragraph;
  anchorProps: Anchor;
}

export const TitleDescriptionLinkArrow: React.FC<TitleDescriptionLinkArrow> = ({
  heading2Props,
  paragraphProps,
  anchorProps,
}) => {
  return (
    <div className={styles.root}>
      <Heading2 {...heading2Props} />
      <Paragraph {...paragraphProps} />
      <AnchorWithArrow {...anchorProps} />
    </div>
  );
};
