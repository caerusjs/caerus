import dynamic from 'next/dynamic';

// build this file dynamically in future using a script on boot
export const componentList = {
  Anchor: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Anchor`).then((mod) => mod.Anchor),
  ),
  Arrow: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Arrow`).then((mod) => mod.Arrow),
  ),
  Button: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Button`).then((mod) => mod.Button),
  ),
  Heading1: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Heading1`).then((mod) => mod.Heading1),
  ),
  Heading2: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Heading2`).then((mod) => mod.Heading2),
  ),
  Heading3: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Heading3`).then((mod) => mod.Heading3),
  ),
  Heading4: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Heading4`).then((mod) => mod.Heading4),
  ),
  Input: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Input`).then((mod) => mod.Input),
  ),
  Paragraph: dynamic(() =>
    import(`@caerusjs/dalton/atoms/Paragraph`).then((mod) => mod.Paragraph),
  ),
  UnorderedList: dynamic(() =>
    import(`@caerusjs/dalton/atoms/UnorderedList`).then(
      (mod) => mod.UnorderedList,
    ),
  ),
};
