import dynamic, { LoaderComponent } from 'next/dynamic';
import { ComponentType } from 'react';

export interface ComponentList {
  [propertyName: string]: ComponentType<any>;
}

// build this file dynamically in future using a script on boot
export const ComponentList: ComponentList = {
  AnchorWithArrow: dynamic(
    () =>
      import(`@caerusjs/dalton/molecules/AnchorWithArrow`).then(
        (mod) => mod.AnchorWithArrow,
      ) as LoaderComponent,
  ),
  InputButton: dynamic(
    () =>
      import(`@caerusjs/dalton/molecules/InputButton`).then(
        (mod) => mod.InputButton,
      ) as LoaderComponent,
  ),
  Navigation: dynamic(
    () =>
      import(`@caerusjs/dalton/molecules/Navigation`).then(
        (mod) => mod.Navigation,
      ) as LoaderComponent,
  ),
  TitleDescriptionLinkArrow: dynamic(
    () =>
      import(`@caerusjs/dalton/molecules/TitleDescriptionLinkArrow`).then(
        (mod) => mod.TitleDescriptionLinkArrow,
      ) as LoaderComponent,
  ),
  VerticalNavigation: dynamic(
    () =>
      import(`@caerusjs/dalton/molecules/VerticalNavigation`).then(
        (mod) => mod.VerticalNavigation,
      ) as LoaderComponent,
  ),
};
