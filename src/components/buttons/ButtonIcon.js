import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListIcon from '@material-ui/icons/List';
import CartIcon from '@material-ui/icons/ShoppingCart';
import WhishlistIcon from '@material-ui/icons/Favorite';

const ButtonStyled = styled.button`
  background: #fff5ab;
  border-radius: 50%;
  border: 1px solid #e3c800;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  position: relative;
  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 0px gold;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    z-index: -1;
  }

  &:active {
    outline: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

class ButtonIcon extends React.Component {
  checkIcon() {
    const { cart, whishlist } = this.props;

    if (cart) {
      return <CartIcon />;
    }

    if (whishlist) {
      return <WhishlistIcon />;
    }

    return <ListIcon />;
  }

  render() {
    const { onClick } = this.props;

    return <ButtonStyled onClick={onClick}>{this.checkIcon()}</ButtonStyled>;
  }
}

ButtonIcon.proptype = {
  cart: PropTypes.bool,
  whishlist: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  cart: false,
  whishlist: false,
};

export default ButtonIcon;
