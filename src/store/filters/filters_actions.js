import { SET_FILTER } from '../filters/filters_consts';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
