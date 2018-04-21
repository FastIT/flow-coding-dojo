// @flow
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import isEmpty from 'lodash/isEmpty';
import { IntlProvider, addLocaleData } from 'react-intl';
// $FlowFixMe
import fr from 'react-intl/locale-data/fr';
// $FlowFixMe
import en from 'react-intl/locale-data/en';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import HeaderBar from '../../components/header-bar';
import SideBar from '../../components/side-bar';
import SwPeopleConnected from '../sw-people';

import frMessages from '../../locale/locale-fr.json';
import enMessages from '../../locale/locale-en.json';

import * as AuthenticationEffect from '../../effects/authentication';
import * as SideBarAction from '../../actions/side-bar';
import crudRoutes from '../../crud-routes/';
import type { User } from '../../common/user';

const locales = {
  fr: frMessages,
  en: enMessages,
};

addLocaleData([...fr, ...en]);

type Sidebar = {
  open: boolean,
};
type Authentication = {
  id: string,
  user: User,
};
type Props = {
  languageSelected: string,
  authentication: {} | Authentication,
  authenticationEffects: {
    login: Function,
    logout: Function,
  },
  sideBar: Sidebar,
  sideBarActions: {
    open: Function,
    close: Function,
    toggle: Function,
  },
  children?: Node,
};
type State = {
  language: {
    selected: string,
  },
  authentication?: {} | Authentication,
  'side-bar': Sidebar,
};

export class Root extends Component<Props> {
  componentWillMount() {
    this.props.authenticationEffects.login().catch(() => {
      // To avoid 401 error when page loaded from cache
      window.location.reload(true);
    });
  }

  doLogout() {
    this.props.authenticationEffects.logout();
  }

  props: Props;
  render() {
    if (isEmpty(this.props.authentication)) return <div />;
    return (
      <IntlProvider
        locale={this.props.languageSelected}
        messages={locales[this.props.languageSelected]}
      >
        <div>
          <HeaderBar onOpenSideBar={this.props.sideBarActions.open} />
          <SideBar
            open={this.props.sideBar.open}
            onCloseSideBar={this.props.sideBarActions.close}
            onLogout={this.props.authenticationEffects.logout}
          />
          <Switch>
            <Route path="/" component={SwPeopleConnected} />
            {crudRoutes.map(route => route)}
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    languageSelected: state.language.selected,
    authentication: state.authentication,
    sideBar: state['side-bar'],
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    authenticationEffects: bindActionCreators(AuthenticationEffect, dispatch),
    sideBarActions: bindActionCreators(SideBarAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
