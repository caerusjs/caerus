import { internet, lorem } from 'faker';
import { toTitleCase } from '@caerusjs/helpers';

// Atoms
export const anchorProps = {
  href: internet.url(),
  children: lorem.word(),
};

export const anchorLinkProps = {
  href: internet.url(),
  children: lorem.word(),
};

export const arrowProps = {};

export const buttonProps = {
  children: lorem.word(),
};

export const heading1Props = {
  children: toTitleCase(lorem.words(3)),
};

export const heading2Props = {
  children: toTitleCase(lorem.words(3)),
};

export const heading3Props = {
  children: toTitleCase(lorem.words(3)),
};

export const heading4Props = {
  children: toTitleCase(lorem.words(3)),
};

export const inputProps = {
  placeholder: lorem.word(),
};

export const paragraphProps = {
  children: lorem.paragraph(15),
};

export const unorderedListProps = {
  children: lorem.paragraph(15),
};

// Molecules
export const anchorWithArrowProps = {
  children: lorem.word(),
  href: internet.url(),
};

export const inputButtonProps = {
  inputProps: { placeholder: lorem.word() },
  buttonProps: { children: lorem.word() },
};

export const navigationProps = {
  anchors: [1, 2, 3, 4, 5].map((id) => ({
    id: id,
    href: internet.url(),
    children: lorem.word(),
  })),
};

export const titleDescriptionLinkArrowProps = {
  heading2Props: { children: toTitleCase(lorem.words(3)) },
  paragraphProps: { children: lorem.paragraph(15) },
  anchorProps: { children: lorem.word(), href: internet.url() },
};

export const verticalNavigationProps = {
  anchors: [1, 2, 3, 4, 5].map((id) => ({
    id: id,
    href: internet.url(),
    children: lorem.word(),
  })),
};

// Organisms
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

export const pageCallToActionProps = {
  backgroundImage: 'http://placeimg.com/640/480/nature',
  titleDescriptionLinkArrowProps: {
    heading2Props: { children: toTitleCase(lorem.words(3)) },
    paragraphProps: { children: lorem.paragraph(15) },
    anchorProps: { children: lorem.word(), href: internet.url() },
  },
};
