import setPeopleList from '../actions/sw-people';

const getSwPeopleList = () => (dispatch) =>
  fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(response => dispatch(
      setPeopleList(response.results)
    ))

export default getSwPeopleList;

