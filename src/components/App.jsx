'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <span></span>
      </MuiThemeProvider>
    );
  }
}

export default AppComponent;
