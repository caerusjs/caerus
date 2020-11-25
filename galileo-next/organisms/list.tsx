import dynamic from 'next/dynamic';

// build this file dynamically in future using a script on boot
export const componentList = {
  NavigationBar: dynamic(() =>
    import(`@caerusjs/dalton/organisms/NavigationBar`).then(
      (mod) => mod.NavigationBar,
    ),
  ),
};
