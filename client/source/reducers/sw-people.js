// @flow
import cst from '../constants/sw-people';
import type { SwPeopleState } from '../common/store';
import type { SetPeopleListAction } from '../actions/sw-people';

const initialState: SwPeopleState = {
  peopleList: [],
}

export default function reducer(state: SwPeopleState = initialState, action: SetPeopleListAction) {
  switch (action.type) {
    case cst.SET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.payload,
      }    
    default:
      return state;
  }
};
