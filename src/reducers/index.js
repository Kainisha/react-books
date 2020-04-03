import { FETCH_REQUEST, FETCH_BOOKS, FETCH_WHISHLIST, REMOVE_WHISHLIST } from 'actions';

const initialState = {
  books: [],
  whishlist: [],
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
    case FETCH_WHISHLIST:
      return {
        ...state,
        whishlist: [...action.payload.whishlist],
      };
    case REMOVE_WHISHLIST: {
      const whishlist = state.whishlist.filter((book) => book.id !== action.payload.id);
      return {
        ...state,
        whishlist,
      };
    }
    default:
      return state;
  }
};
