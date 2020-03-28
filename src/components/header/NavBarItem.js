import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ItemWrapperStyled = styled.li`
  width: 8rem;
  list-style: none;
  text-align: center;
  height: 100%;
`;

const LinkWrapper = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  font-weight: 700;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &.active {
    background-color: #006fc9;
  }
`;

const NavBarItem = ({ to, children }) => (
  <ItemWrapperStyled>
    <LinkWrapper to={to} activeClassName="active">
      {children}
    </LinkWrapper>
  </ItemWrapperStyled>
);

export default NavBarItem;
