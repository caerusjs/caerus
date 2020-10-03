import React from 'react';
import { Link } from 'react-router-dom';

const IndexAtomView: React.FC = () => {
  const atoms = ['anchor', 'paragraph', 'button'];

  const atomList = atoms.map((atom) => {
    return (
      <>
        <Link to={`atoms/${atom}`}>{atom}</Link>
        <br />
      </>
    );
  });

  return <div className='container'>{atomList}</div>;
};

export default IndexAtomView;
