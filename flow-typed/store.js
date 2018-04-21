// @flow
import type { People } from '../client/source/common/people';

declare type SwPeopleState = {
  +peopleList: Array<People>,
};

declare type StoreState = {
  +'sw-people': SwPeopleState,
};
