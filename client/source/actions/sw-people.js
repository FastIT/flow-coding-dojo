import cst from '../constants/sw-people';

const setPeopleList = (peopleList) => ({ type: cst.SET_PEOPLE_LIST, payload: peopleList });

export default setPeopleList;
