import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'components/books/Box';

const ViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
`;

const Grid = ({ books }) => (
  <ViewStyled>
    <GridWrapperStyled>
      {books.map(({ id, title, author, image }) => (
        <Box title={title} author={author} image={image} key={id} />
      ))}
    </GridWrapperStyled>
  </ViewStyled>
);

Grid.prototype = {
  books: PropTypes.array.isRequired,
};

export default Grid;
