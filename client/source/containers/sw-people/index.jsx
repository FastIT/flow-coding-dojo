// @flow
import React, { Component } from 'react';

import SwPeopleList from '../../components/sw-people-list';

export default class SwPeople extends Component<void> {
  peopleList = [
    { name: 'Luke Skywalker', height: 165, gender: 'male', hair_color: 'blond' },
    { name: 'Obi-Wan Kenobi', height: 172, gender: 'male', hair_color: 'auburn, white' },
    { name: 'R2-D2', height: 96, gender: 'n/a', hair_color: 'n/a' },
    { name: "Leia Organa", height: 150, gender: 'female', hair_color: 'brown' },
  ];

  render() {
    return (
      <div className="container">
        <SwPeopleList list={this.peopleList} />
      </div>
    );
  }
}
