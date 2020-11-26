import dynamic, { LoaderComponent } from 'next/dynamic';
import { ComponentType } from 'react';

export interface ComponentList {
  [propertyName: string]: ComponentType<any>;
}

// build this file dynamically in future using a script on boot
export const ComponentList: ComponentList = {
  Anchor: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Anchor`).then(
        (mod) => mod.Anchor,
      ) as LoaderComponent,
  ),
  AnchorLink: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/AnchorLink`).then(
        (mod) => mod.AnchorLink,
      ) as LoaderComponent,
  ),
  Arrow: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Arrow`).then(
        (mod) => mod.Arrow,
      ) as LoaderComponent,
  ),
  Button: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Button`).then(
        (mod) => mod.Button,
      ) as LoaderComponent,
  ),
  Heading1: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Heading1`).then(
        (mod) => mod.Heading1,
      ) as LoaderComponent,
  ),
  Heading2: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Heading2`).then(
        (mod) => mod.Heading2,
      ) as LoaderComponent,
  ),
  Heading3: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Heading3`).then(
        (mod) => mod.Heading3,
      ) as LoaderComponent,
  ),
  Heading4: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Heading4`).then(
        (mod) => mod.Heading4,
      ) as LoaderComponent,
  ),
  Input: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Input`).then(
        (mod) => mod.Input,
      ) as LoaderComponent,
  ),
  Paragraph: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/Paragraph`).then(
        (mod) => mod.Paragraph,
      ) as LoaderComponent,
  ),
  UnorderedList: dynamic(
    () =>
      import(`@caerusjs/dalton/atoms/UnorderedList`).then(
        (mod) => mod.UnorderedList,
      ) as LoaderComponent,
  ),
};
