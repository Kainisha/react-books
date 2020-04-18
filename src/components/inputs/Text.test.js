import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputText from './Text';

describe('Test input text', () => {
  it('render default element', () => {
    const { getByPlaceholderText } = render(<InputText />);
    expect(getByPlaceholderText(/text/i)).toBeInTheDocument();
  });
  it('render search element', () => {
    const placeholder = 'filter text';
    const { getByPlaceholderText } = render(<InputText placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  it('has search icon', () => {
    const { container } = render(<InputText search />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('test value', () => {
    const placeholder = 'filter text';
    const { getByPlaceholderText } = render(<InputText search placeholder={placeholder} />);
    fireEvent.change(getByPlaceholderText(placeholder), { target: { value: 'Pokemon' } });
    expect(getByPlaceholderText(placeholder)).toHaveValue('Pokemon');
  });
});
