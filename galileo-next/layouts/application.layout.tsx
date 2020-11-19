// TODO: Should this be imported from index.html instead?
import '@caerusjs/themes/aruna.css';
import '@caerusjs/themes/simple-grid.css';
import { Anchor, NavigationBar, Heading2 } from '@caerusjs/dalton';
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
        <Link href={`/atoms/${toKebabCase(atom)}`}>
          <Anchor>{atom}</Anchor>
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
        <Link href={`/molecules/${toKebabCase(molecule)}`}>
          <Anchor>{molecule}</Anchor>
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
        <Link href={`/organisms/${toKebabCase(organism)}`}>
          <Anchor>{organism}</Anchor>
        </Link>
      </li>
    );
  });

  return (
    <div className='container'>
      <Head>
        <title>Galileo: Component Viewer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NavigationBar
        heading1='Galileo'
        heading2='Component Viewer'
        href='/'
        navigationProps={{ anchors: [{ href: '/', children: 'components' }] }}
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
