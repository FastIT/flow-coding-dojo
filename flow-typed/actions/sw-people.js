import type { People } from '../../client/source/common/people';

declare type SetPeopleListAction = {
  type: 'SET_PEOPLE_LIST',
  payload: Array<People>,
};
