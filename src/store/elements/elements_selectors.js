export const selectVisibleElements = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.elements;
    }
    case 'active': {
      return state.elements.filter((element) => !element.completed);
    }
    case 'completed': {
      return state.elements.filter((element) => element.completed);
    }
    default: {
      return state.elements;
    }
  }
};
