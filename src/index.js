'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import Dashboard from './components/Dashboard.jsx';
import UserProfile from './components/UserProfile.jsx';

render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard}></Route>
      <Route path="/anotherroute" component={UserProfile}></Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'));
