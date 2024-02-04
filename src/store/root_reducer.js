import { combineReducers } from 'redux';

import { elements } from './elements/elements_reducer';
import { filters } from './filters/filters_reducer';

export const rootReducer = combineReducers({
  elements,
  filters,
});
