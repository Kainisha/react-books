import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleCartModal as toggleCartModalAction } from 'actions';

const CartButtonStyled = styled.button`
  width: 7rem;
  height: 2.5rem;
  border-radius: 10px;
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

const CartButton = ({ toggleCartModal }) => {
  const handleClick = () => toggleCartModal(true);

  return <CartButtonStyled onClick={handleClick}>Cart</CartButtonStyled>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartModal: (isShow) => dispatch(toggleCartModalAction(isShow)),
  };
};

export default connect(null, mapDispatchToProps)(CartButton);
