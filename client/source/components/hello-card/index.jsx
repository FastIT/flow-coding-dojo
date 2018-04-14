// @flow
import React, { Component } from 'react';

import { Card, CardText } from 'material-ui/Card/index';
import type { User } from '../../common/user';

type Props = {
  authentication: {
    user: User,
  },
};

class HelloCard extends Component<Props> {
  props: Props;
  render() {
    const {
      authentication: { user = { roles: [], firstName: '' } },
    } = this.props;
    return (
      <div className="box">
        <Card>
          <CardText>
            <h1>Hello {user.firstName}</h1>
            <h2>
              Your roles: {user.roles && user.roles.map(role => role.name).join(', ')}
            </h2>
          </CardText>
        </Card>
      </div>
    );
  }
}
export default HelloCard;
