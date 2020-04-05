import {
  FETCH_REQUEST,
  FETCH_BOOKS,
  FETCH_WHISHLIST,
  REMOVE_WHISHLIST,
  ADD_WHISHLIST,
  TOGGLE_CART_MODAL,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from 'actions';

const initialState = {
  books: [],
  whishlist: [],
  cart: [],
  isCartModalShow: false,
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
    case ADD_WHISHLIST: {
      const { whishlist } = state;
      whishlist.push(action.payload.book);
      return {
        ...state,
        whishlist,
      };
    }
    case TOGGLE_CART_MODAL:
      return {
        ...state,
        isCartModalShow: action.payload.isShow,
      };
    case ADD_TO_CART: {
      const { cart } = state;
      cart.push(action.payload.book);
      return {
        ...state,
        cart,
      };
    }
    case DELETE_FROM_CART: {
      const cart = state.cart.filter((book) => book.id !== action.payload.id);
      return {
        ...state,
        cart,
      };
    }
    default:
      return state;
  }
};
