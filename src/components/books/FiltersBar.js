import React from 'react';
import styled from 'styled-components';
import TextInput from 'components/inputs/Text';

const FiltersBarsStyled = styled.div`
  background: #fafafa;
  border: 2px solid lightgrey;
  height: 3rem;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
`;

const FiltersBar = ({ filterBooks }) => (
  <FiltersBarsStyled>
    <TextInput search onChange={filterBooks} />
  </FiltersBarsStyled>
);

export default FiltersBar;
