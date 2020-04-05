export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_WHISHLIST = 'FETCH_WHISHLIST';
export const REMOVE_WHISHLIST = 'REMOVE_WHISHLIST';
export const ADD_WHISHLIST = 'ADD_WHISHLIST';
export const TOGGLE_CART_MODAL = 'TOGGLE_CART_MODAL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const fetchBooks = () => (dispatch) => {
  return dispatch({
    type: FETCH_BOOKS,
    payload: {
      books: [
        {
          id: 1,
          title: 'Lord of the Rings',
          author: 'Tolkien',
          image: './images/1.jpg',
        },
        {
          id: 2,
          title: 'Test test',
          author: 'Warrior',
          image: './images/2.jpg',
        },
        {
          id: 3,
          title: 'World of Warcraft',
          author: 'Rouge',
          image: './images/3.jpg',
        },
        {
          id: 4,
          title: 'Pokemon',
          author: 'Pikatchu',
          image: './images/4.jpg',
        },
        {
          id: 5,
          title: 'Pokemon Fire Red',
          author: 'Charizard',
          image: './images/5.jpg',
        },
      ],
    },
  });
};

export const fetchWhishlist = () => (dispatch) => {
  return dispatch({
    type: FETCH_WHISHLIST,
    payload: {
      whishlist: [
        {
          id: 1,
          title: 'Lord of the Rings',
          author: 'Tolkien',
          image: './images/1.jpg',
        },
        {
          id: 2,
          title: 'Test test',
          author: 'Warrior',
          image: './images/2.jpg',
        },
        {
          id: 5,
          title: 'Pokemon Fire Red',
          author: 'Charizard',
          image: './images/5.jpg',
        },
      ],
    },
  });
};

export const removeWhishlist = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_WHISHLIST,
    payload: { id },
  });
};

export const addWhishlist = (book) => (dispatch) => {
  return dispatch({
    type: ADD_WHISHLIST,
    payload: { book },
  });
};

export const toggleCartModal = (isShow) => (dispatch) => {
  return dispatch({
    type: TOGGLE_CART_MODAL,
    payload: { isShow },
  });
};

export const addToCart = (book) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: { book },
  });
};

export const deleteFromCart = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_FROM_CART,
    payload: { id },
  });
};
