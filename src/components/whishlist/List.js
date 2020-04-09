import React from 'react';
import styled from 'styled-components';
import Item from 'components/whishlist/Item';

const ListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const List = ({ books, onDelete }) => (
  <ListStyled>
    {books.map(({ title, image, author, id }) => (
      <Item title={title} image={image} author={author} key={id} onDelete={onDelete} id={id} />
    ))}
  </ListStyled>
);

export default List;
