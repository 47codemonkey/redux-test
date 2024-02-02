import { combineReducers } from 'redux';

import { elements } from './elements/elements_reducer';

export const rootReducer = combineReducers({
  elements,
});
