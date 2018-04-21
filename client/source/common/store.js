// @flow
import type { People } from './people';

export type SwPeopleState = {
  +peopleList: Array<People>,
};

export type StoreState = {
  +'sw-people': SwPeopleState,
};
