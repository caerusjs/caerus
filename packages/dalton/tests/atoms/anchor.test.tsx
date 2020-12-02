import React from 'react';

import { render, screen } from '@testing-library/react';

import { Anchor } from '../../atoms/Anchor';

test('loads and displays Anchor atom', () => {
  render(<Anchor href='http://link'>bob</Anchor>);

  expect(screen.getByRole('link')).toHaveTextContent('bob');
});
