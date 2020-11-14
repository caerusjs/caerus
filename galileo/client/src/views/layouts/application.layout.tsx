import React from 'react';

// TODO: Should this be imported from index.html instead?
import '@caerusjs/themes/aruna.css';
import { NavigationBar } from '@caerusjs/dalton';

const ApplicationLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar
        heading1='Galileo'
        heading2='powered by Caerus'
        href='/'
        navigationProps={{ anchors: [{ href: '/', children: 'components' }] }}
      />
      {children}
    </>
  );
};

export default ApplicationLayout;
