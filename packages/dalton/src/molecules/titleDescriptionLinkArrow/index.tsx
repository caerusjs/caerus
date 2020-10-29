import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor, Paragraph, Heading2, Arrow } from '../../atoms';
import { toTitleCase } from '@caerusjs/helpers/dist';

export interface TitleDescriptionLinkArrow
  extends React.HTMLAttributes<HTMLElement> {
  heading2Props: Heading2;
  paragraphProps: Paragraph;
  anchorProps: Anchor;
  arrowProps: Arrow;
}

export const TitleDescriptionLinkArrow = ({
  heading2Props,
  paragraphProps,
  anchorProps,
  arrowProps,
}: TitleDescriptionLinkArrow) => {
  anchorProps.children = (
    <>
      {anchorProps?.children} <Arrow {...arrowProps} />
    </>
  );

  return (
    <div className={styles.root}>
      <Heading2 {...heading2Props} />
      <Paragraph {...paragraphProps} />
      <Anchor {...anchorProps} />
    </div>
  );
};

export const titleDescriptionLinkArrowProps = {
  heading2Props: { children: toTitleCase(lorem.words(3)) },
  paragraphProps: { children: lorem.paragraph(15) },
  anchorProps: { children: lorem.word(), href: internet.url() },
};
