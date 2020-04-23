import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  main: 'mediumseagreen',
};

const MainTheme = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTheme.prototype = {
  children: PropTypes.element.isRequired,
};

export default MainTheme;
