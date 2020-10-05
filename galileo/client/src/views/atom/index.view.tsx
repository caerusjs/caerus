import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationLayout from 'views/layouts/application.layout';

const IndexAtomView: React.FC = () => {
  const atoms = ['heading1'];

  const atomList = atoms.map((atom) => {
    return (
      <ApplicationLayout>
        <Link to={`atoms/${atom}`}>{atom}</Link>
        <br />
      </ApplicationLayout>
    );
  });

  return <div className='container'>{atomList}</div>;
};

export default IndexAtomView;
