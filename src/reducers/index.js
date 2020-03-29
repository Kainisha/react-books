import { FETCH_REQUEST, FETCH_BOOKS, FETCH_SUCCESS } from 'actions';

const initialState = {
  books: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOOKS:
      return {
        ...state,
        books: [...action.payload.books],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        books: [...action.payload.books],
      };
    default:
      return state;
  }
};
