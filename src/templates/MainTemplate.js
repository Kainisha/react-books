import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Cart from 'components/modal/cart/Cart';

const ViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const MainTemplate = ({ children }) => (
  <>
    <Header />
    <ViewStyled>{children}</ViewStyled>
    <Cart />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
