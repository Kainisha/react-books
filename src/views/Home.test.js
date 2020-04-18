import React from 'react';
import { waitForElement } from '@testing-library/react';
import { renderWithRouter } from 'testUtils';
import { Provider } from 'react-redux';
import { store } from 'store';
import axiosMock from 'axios';
import Home from './Home';

jest.mock('axios');
afterEach(() => jest.resetAllMocks());

describe('test home view', () => {
  it('test home view', async () => {
    axiosMock.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Lord of the Rings',
          author: 'Tolkien',
          image: 'images/1.jpg',
        },
        {
          id: 2,
          title: 'Test test',
          author: 'Warrior',
          image: 'images/2.jpg',
        },
      ],
    });

    const { getByText } = renderWithRouter(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const boxes = await waitForElement(() => getByText(/Lord of the Rings/i));
    expect(boxes).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
