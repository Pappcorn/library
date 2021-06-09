import React from 'react';
import { render } from '@testing-library/react';
import { BasicPassword } from './password.composition';

it('should render with the correct text', () => {
  render(<BasicPassword />);
});
