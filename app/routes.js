import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/home_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/' component={HomePage} />
  </Route>
);
