import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemStyled = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1rem;
  grid-template-areas: 'image info delete';
  grid-column-gap: 1rem;
  height: 5rem;
  border: 1px solid lightgray;
  padding: 0.5rem;
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
