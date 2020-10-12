import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationLayout from 'views/layouts/application.layout';
import ShowAtomView from 'views/atom/show.view';

const IndexAtomView: React.FC = () => {
  const atoms = ['heading1', 'heading2', 'heading3', 'heading4', 'paragraph'];

  const atomList = atoms.map((atom) => {
    return (
      <li key={atom}>
        <Link to={`/atoms/${atom}`}>{atom}</Link>
      </li>
    );
  });

  return (
    <ApplicationLayout>
      <ul>{atomList}</ul>
      <ShowAtomView />
    </ApplicationLayout>
  );
};

export default IndexAtomView;
