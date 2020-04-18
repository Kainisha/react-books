import React from 'react';
import { render } from '@testing-library/react';
import ButtonIcon from './ButtonIcon';

describe('ButtonIcon', () => {
  it('has icon', () => {
    const { container } = render(<ButtonIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
