import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor, Paragraph, Heading2 } from '../../atoms';
import { AnchorWithArrow } from '../AnchorWithArrow';
import { toTitleCase } from '@caerusjs/helpers/dist';

export interface TitleDescriptionLinkArrow
  extends React.HTMLAttributes<HTMLElement> {
  heading2Props: Heading2;
  paragraphProps: Paragraph;
  anchorProps: Anchor;
}

export const TitleDescriptionLinkArrow = ({
  heading2Props,
  paragraphProps,
  anchorProps,
}: TitleDescriptionLinkArrow) => {
  return (
    <div className={styles.root}>
      <Heading2 {...heading2Props} />
      <Paragraph {...paragraphProps} />
      <AnchorWithArrow {...anchorProps} />
    </div>
  );
};

export const titleDescriptionLinkArrowProps = {
  heading2Props: { children: toTitleCase(lorem.words(3)) },
  paragraphProps: { children: lorem.paragraph(15) },
  anchorProps: { children: lorem.word(), href: internet.url() },
};
