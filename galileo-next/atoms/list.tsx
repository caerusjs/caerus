import dynamic from 'next/dynamic';

// build this file dynamically in future using a script on boot
export const componentList = {
  Anchor: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Anchor`).then((mod) => mod.Anchor),
  ),
};
