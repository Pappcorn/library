import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import { BasicButton, LoadingButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('Primary button');
  expect(rendered).toBeTruthy();
});

it('should disable button', () => {
  render(<LoadingButton />)
  const btn = screen.getByText('Click me');
  fireEvent.click(btn);

  expect(btn.closest('button')).toBeDisabled();
})