import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemStyled = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1rem;
  grid-template-areas: 'image info delete';
  grid-column-gap: 1rem;
  border: 1px solid lightgray;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  position: relative;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    box-shadow: 0 1em 1em 0.075em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ImageStyled = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const InfoStyled = styled.div`
  grid-area: info;
`;

const TitleStyled = styled.div`
  color: darkgray;
  font-size: 1.3rem;
`;

const AuthorStyled = styled.div`
  color: gray;
`;

const DeleteStyled = styled.div`
  grid-area: delete;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;

    path {
      fill: red;
      transition: fill 300ms ease-in-out;
    }

    &:hover {
      path {
        fill: orange;
      }
    }
  }
`;

const DeleteButtonStyled = styled.button`
  outline: none;
  background: white;
  border: 0;
`;

const Item = ({ image, title, author, onDelete, id }) => (
  <ItemStyled>
    <ImageStyled>
      <img src={image} alt="" />
    </ImageStyled>
    <InfoStyled>
      <TitleStyled>
        <span>{title}</span>
      </TitleStyled>
      <AuthorStyled>
        <span>{author}</span>
      </AuthorStyled>
    </InfoStyled>
    <DeleteStyled>
      <DeleteButtonStyled onClick={() => onDelete(id)}>
        <DeleteIcon />
      </DeleteButtonStyled>
    </DeleteStyled>
  </ItemStyled>
);

export default Item;
