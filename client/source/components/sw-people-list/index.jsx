import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SwPeopleList extends Component {
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

SwPeopleList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string })
  ),
};
