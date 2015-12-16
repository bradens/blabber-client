import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Map } from 'immutable';
import routes from './routes';
import Server from './server';
import configureStore from './store/configureStore';
import './app.scss';

const store = configureStore();
Server.init(store);

render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
