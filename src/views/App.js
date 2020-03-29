import React from 'react';
import MainTheme from 'theme/MainTheme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import Home from 'views/Home';
import Books from 'views/Books';
import Whishlist from './Whistlist';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTheme>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/whishlist" component={Whishlist} />
          </Switch>
        </MainTheme>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
