import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _chunk from 'lodash/chunk';

import Box from 'components/books/Box';
import FiltersBar from 'components/books/FiltersBar';
import Pager from 'components/pagination/pager/Pager';

const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Grid = ({ books }) => {
  const initState = {
    page: 1,
    perPage: 4,
    filterValue: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FILTER':
        return {
          ...state,
          filterValue: action.filterValue,
        };
      case 'CHANGE_PAGE':
        return {
          ...state,
          page: action.page,
        };
      case 'CHANGE_PER_PAGE':
        return {
          ...state,
          perPage: action.perPage,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const filterBooks = (value) => dispatch({ type: 'FILTER', filterValue: value });
  const changePage = (page) => dispatch({ type: 'CHANGE_PAGE', page });

  const filteredBooks = () => {
    if (!books.length || state.filterValue.trim() === '') {
      return books;
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(state.filterValue.toLowerCase()),
    );
  };

  const computedBooks = () => {
    const filtered = filteredBooks();
    if (!filtered.length) {
      return filtered;
    }
    return _chunk(filtered, state.perPage)[state.page - 1];
  };

  return (
    <>
      <FiltersBar filterBooks={filterBooks} />
      <GridWrapperStyled>
        {computedBooks().map(({ id, title, author, image }) => (
          <Box title={title} author={author} image={image} key={id} id={id} />
        ))}
      </GridWrapperStyled>
      <Pager
        perPage={state.perPage}
        items={filteredBooks()}
        page={state.page}
        changePage={changePage}
      />
    </>
  );
};

Grid.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Grid;
