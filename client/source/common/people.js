// @flow

const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  NA: 'n/a',
}

export type People = {
  name: string,
  gender: $Values<typeof GENDER>,
  height: number,
  hair_color: string,
};
