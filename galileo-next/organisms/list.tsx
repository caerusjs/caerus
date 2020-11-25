import dynamic, { LoaderComponent } from 'next/dynamic';
import { ComponentType } from 'react';

// build this file dynamically in future using a script on boot

export interface ComponentList {
  [propertyName: string]: ComponentType<any>;
}

export const ComponentList: ComponentList = {
  NavigationBar: dynamic(
    () =>
      import(`@caerusjs/dalton/organisms/NavigationBar`).then(
        (mod) => mod.NavigationBar,
      ) as LoaderComponent,
  ),
};
