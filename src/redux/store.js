import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import statusFilters from 'redux/constants';

const initialState = {
  tasks: [
    { id: 0, text: 'Learm HTML', completed: true },
    { id: 1, text: 'Learm CSS', completed: false },
    { id: 2, text: 'Learm JS', completed: true },
    { id: 3, text: 'Learm React', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
