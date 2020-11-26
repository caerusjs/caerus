import React, { RefObject } from 'react';
import { Anchor } from '../Anchor';

export const AnchorLink = React.forwardRef(
  (props: React.AnchorHTMLAttributes<HTMLAnchorElement>, ref) => (
    <Anchor {...props} ref={ref as RefObject<HTMLAnchorElement>} />
  ),
);
