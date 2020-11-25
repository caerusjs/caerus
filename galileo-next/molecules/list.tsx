import dynamic from 'next/dynamic';

// build this file dynamically in future using a script on boot
export const componentList = {
  AnchorWithArrow: dynamic(() =>
    import(`@caerusjs/dalton/molecules/AnchorWithArrow`).then(
      (mod) => mod.AnchorWithArrow,
    ),
  ),
  InputButton: dynamic(() =>
    import(`@caerusjs/dalton/molecules/InputButton`).then(
      (mod) => mod.InputButton,
    ),
  ),
  Navigation: dynamic(() =>
    import(`@caerusjs/dalton/molecules/Navigation`).then(
      (mod) => mod.Navigation,
    ),
  ),
  TitleDescriptionLinkArrow: dynamic(() =>
    import(`@caerusjs/dalton/molecules/TitleDescriptionLinkArrow`).then(
      (mod) => mod.TitleDescriptionLinkArrow,
    ),
  ),
  VerticalNavigation: dynamic(() =>
    import(`@caerusjs/dalton/molecules/VerticalNavigation`).then(
      (mod) => mod.VerticalNavigation,
    ),
  ),
};
