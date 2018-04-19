import React, { Component } from 'react';

import SwPeopleList from '../../components/sw-people-list';

export default class SwPeople extends Component {
  peopleList = [
    { name: 'Luke Skywalker', height: 165, gender: 'male', hair_color: 'blond' },
    { name: 'Obi-Wan Kenobi', height: 172, gender: 'male', hair_color: 'auburn, white' }
  ];

  render() {
    return (
      <div className="container">
        <SwPeopleList list={this.peopleList} />
      </div>
    );
  }
}
