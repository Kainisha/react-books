import React, { lazy, Suspense } from 'react';
import MainTheme from 'theme/MainTheme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ToastProvider } from 'react-toast-notifications';
import GlobalStyle from 'theme/GlobalStyle';
import Home from 'views/Home';
import Books from 'views/Books';
import Loading from 'components/utilities/Loading';

const Whishlist = lazy(() => import('views/Whishlist'));

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <MainTheme>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/books">
                  <Books />
                </Route>
                <Route exact path="/whishlist" component={Whishlist} />
              </Switch>
            </Suspense>
          </MainTheme>
        </BrowserRouter>
      </ToastProvider>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
