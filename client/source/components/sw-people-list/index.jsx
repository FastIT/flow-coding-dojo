// @flow
import React, { Component } from 'react';

import type { People } from '../../common/people';

type Props = {
  list: Array<People>,
};

export default class SwPeopleList extends Component<Props> {
  render() {
    return (
      <ul>
        {
          this.props.list.map(item =>
            <li key={item.name}>
              <div>name: {item.name}</div>
              <div>gender: {item.gender}</div>
              <div>height: {item.height}</div>
              <div>hair color: {item.hair_color}</div>
            </li>
          )
        }
      </ul>
    );
  }
}
