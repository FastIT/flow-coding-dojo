// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { User } from '../../common/user';
import HelloCard from '../../components/hello-card';

type Authentication = {
  user: User,
};
type Props = {
  authentication: Authentication,
};
type State = {
  authentication: Authentication,
};
class HomeView extends Component<Props> {
  props: Props;
  render() {
    const { authentication = { user: { firstName: '' } } } = this.props;
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <HelloCard authentication={authentication} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  authentication: state.authentication,
});

export default connect(mapStateToProps)(HomeView);
