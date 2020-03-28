import React from 'react';
import styled from 'styled-components';

import NavBar from 'components/header/NavBar';
import CartButton from 'components/header/CartButton';

const HeaderStyled = styled.header`
  height: 50px;
  width: 100vw;
  position: sticky;
  top: 0;
  background: #0d0d0d;
  display: flex;
  justify-content: space-between;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(181, 181, 181, 1);
  -moz-box-shadow: 0px 5px 5px 0px rgba(181, 181, 181, 1);
  box-shadow: 0px 5px 5px 0px rgba(181, 181, 181, 1);
`;

const Header = () => (
  <HeaderStyled>
    <NavBar />
    <CartButton />
  </HeaderStyled>
);

export default Header;
