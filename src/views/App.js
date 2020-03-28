import React from 'react';
import MainTheme from 'theme/MainTheme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Books from 'views/Books';
import Whishlist from './Whistlist';

function App() {
  return (
    <BrowserRouter>
      <MainTheme>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/whistlist">
            <Whishlist />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </MainTheme>
    </BrowserRouter>
  );
}

export default App;
