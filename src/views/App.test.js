import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('test app navigation', () => {
  it('test navigation', () => {
    const { container, getByText } = render(<App />);
    expect(container.innerHTML).toMatch('New');

    fireEvent.click(getByText(/books/i));
    expect(container.innerHTML).toMatch('<h1>Books</h1>');

    fireEvent.click(getByText(/home/i));
    expect(container.innerHTML).toMatch('New');
  });
});
