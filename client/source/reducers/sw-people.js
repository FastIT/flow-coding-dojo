import cst from '../constants/sw-people';

export default function reducer(state = {}, action) {
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
