import React from 'react';
import '@caerusjs/themes/aruna.css';
import { NavigationBar, Heading2, AnchorLink } from '@caerusjs/dalton';
import Head from 'next/head';

import * as Atoms from '@caerusjs/dalton/atoms';
import * as Molecules from '@caerusjs/dalton/molecules';
import * as Organisms from '@caerusjs/dalton/organisms';

import Link from 'next/link';
import { toKebabCase } from '@caerusjs/helpers';

const ApplicationLayout: React.FC = ({ children }) => {
  const atoms = Object.keys(Atoms).filter((atom) => !atom.includes('Props'));

  const atomList = atoms.map((atom: string) => {
    return (
      <li key={atom}>
        <Link href={`/atoms/${toKebabCase(atom)}`} passHref>
          <AnchorLink>{atom}</AnchorLink>
        </Link>
      </li>
    );
  });

  const molecules = Object.keys(Molecules).filter(
    (molecule) => !molecule.includes('Props'),
  );

  const moleculeList = molecules.map((molecule: string) => {
    return (
      <li key={molecule}>
        <Link href={`/molecules/${toKebabCase(molecule)}`} passHref>
          <AnchorLink>{molecule}</AnchorLink>
        </Link>
      </li>
    );
  });

  const organisms = Object.keys(Organisms).filter(
    (organism) => !organism.includes('Props'),
  );

  const organismList = organisms.map((organism: string) => {
    return (
      <li key={organism}>
        <Link href={`/organisms/${toKebabCase(organism)}`} passHref>
          <AnchorLink>{organism}</AnchorLink>
        </Link>
      </li>
    );
  });

  return (
    <div className='container'>
      <Head>
        <title>Galileo: Component Viewer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href='/fonts.css' rel='stylesheet' />
        <link href='/simple-grid.css' rel='stylesheet' />
      </Head>
      <NavigationBar
        heading1='Galileo'
        heading2='Component Viewer'
        href='/'
        navigationProps={{
          anchors: [{ href: '/', children: 'components', id: '1' }],
        }}
      />
      <div className='row'>
        <div className='col-2'>
          <Heading2 style={{ marginBottom: '0.8rem' }}>Atoms</Heading2>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {atomList}
          </ul>
          <Heading2 style={{ marginBottom: '0.8rem' }}>Molecules</Heading2>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {moleculeList}
          </ul>
          <Heading2 style={{ marginBottom: '0.8rem' }}>Organisms</Heading2>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {organismList}
          </ul>
        </div>
        <div className='col-10'>{children}</div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
