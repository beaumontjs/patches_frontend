'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';

class DashboardComponent extends React.Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default DashboardComponent;
