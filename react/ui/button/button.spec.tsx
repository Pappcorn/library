import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicButton, LoadingButton } from './button.composition';
import userEvent from '@testing-library/user-event';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('Primary button');
  expect(rendered).toBeTruthy();
});

it('should disable button', () => {
  render(<LoadingButton />)
  const btn = screen.getByText('Click me');
  userEvent.click(btn);

  expect(btn.closest('button')).toBeDisabled();
})