import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header/Header';

const MainTemplate = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
