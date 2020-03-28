import React from 'react';

import Header from 'components/header/Header';

const MainTemplate = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainTemplate;
