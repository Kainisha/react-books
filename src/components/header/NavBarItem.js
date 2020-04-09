import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ItemWrapperStyled = styled.li`
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
  padding: 0 1rem;

  &:hover,
  &.active {
    background-color: #006fc9;
  }
`;

const NavBarItem = ({ to, children, exact }) => (
  <ItemWrapperStyled>
    <LinkWrapper to={to} exact={exact} activeClassName="active">
      {children}
    </LinkWrapper>
  </ItemWrapperStyled>
);

NavBarItem.prototype = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBarItem;
