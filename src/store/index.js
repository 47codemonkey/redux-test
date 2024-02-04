import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { loadState, saveState } from './local_storage';
import throttle from 'lodash/throttle';

import { rootReducer } from './root_reducer';

export const cofigureStore = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      saveState({
        elements: store.getState().elements,
      });
    }, 1000),
  );

  return store;
};
