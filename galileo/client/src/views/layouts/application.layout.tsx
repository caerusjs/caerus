import React from 'react';

// TODO: Should this be imported from index.html instead?
import '@caerusjs/themes/aruna.css';
import '@caerusjs/themes/simple-grid.css';
import { NavigationBar } from '@caerusjs/dalton';

const ApplicationLayout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <NavigationBar
        heading1='Galileo'
        heading2='Component Viewer'
        href='/'
        navigationProps={{ anchors: [{ href: '/', children: 'components' }] }}
      />
      {children}
    </div>
  );
};

export default ApplicationLayout;
