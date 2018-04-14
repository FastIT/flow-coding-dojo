// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import type { Store } from 'redux';

import 'flexboxgrid';
import './main.css';
import RootConnected from './containers/root';

const muiTheme = getMuiTheme(lightBaseTheme);

type Props = {
  store: Store<any>,
  history: Object,
};

class AppRoot extends Component<Props> {
  props: Props;
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter basename="/">
            <Route path="/" component={RootConnected} />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default AppRoot;
