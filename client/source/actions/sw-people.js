// @flow
import cst from '../constants/sw-people';
import type { People } from '../common/people';

export type SetPeopleListAction = {
  type: cst.SET_PEOPLE_LIST,
  payload: Array<People>,
};

const setPeopleList = (peopleList: Array<People>): SetPeopleListAction =>
  ({ type: cst.SET_PEOPLE_LIST, payload: peopleList });

export default setPeopleList;
