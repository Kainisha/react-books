import React from 'react';
import styled from 'styled-components';

import NavBarItem from 'components/header/NavBarItem';

const NavBarWrapperStyled = styled.nav`
  display: flex;
  align-items: center;
`;

const NavBar = () => (
  <NavBarWrapperStyled>
    <NavBarItem to="/" exact>
      Home
    </NavBarItem>
    <NavBarItem to="/books">Books</NavBarItem>
    <NavBarItem to="/whishlist">Whishlist</NavBarItem>
  </NavBarWrapperStyled>
);

export default NavBar;
