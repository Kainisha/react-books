import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/header/Header';

const ViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const MainTemplate = ({ children }) => (
  <>
    <Header />
    <ViewStyled>{children}</ViewStyled>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
