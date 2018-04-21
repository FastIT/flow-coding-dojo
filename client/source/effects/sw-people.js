// @flow
import fetch from 'isomorphic-fetch';

import setPeopleList from '../actions/sw-people';

const getSwPeopleList = () => (dispatch: Dispatch) =>
  fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(response => dispatch(
      setPeopleList(response.results)
    ))

export default getSwPeopleList;

