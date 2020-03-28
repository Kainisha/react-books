import React from 'react';
import styled from 'styled-components';

const CartButtonStyled = styled.button`
  width: 7rem;
  height: 100%;
  background: #ffcf00;
  border: 0;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background: #006fc9;
  }
`;

const CartButton = () => <CartButtonStyled>Cart</CartButtonStyled>;

export default CartButton;
