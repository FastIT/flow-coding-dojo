// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SwPeopleList from '../../components/sw-people-list';
import getSwPeopleList from '../../effects/sw-people';
import type { People } from '../../common/people';
import type { StoreState } from '../../common/store';

type Props = {
  getSwPeopleList: Function,
  peopleList: Array<People>,  
};

export class SwPeople extends Component<Props> {
  static defaultProps = {
    peopleList: [],
  }
  constructor(props: Props) {
    super(props);
    props.getSwPeopleList();
  }

  render() {
    return (
      <div className="container">
        <SwPeopleList list={this.props.peopleList} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  peopleList: state['sw-people'].peopleList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSwPeopleList: () => {
    dispatch(getSwPeopleList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SwPeople);
