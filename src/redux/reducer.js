import { combineReducers } from 'redux';
import statusFilters from 'redux/constants';

const tasksInitialState = [
  { id: 0, text: 'Learm HTML', completed: true },
  { id: 1, text: 'Learm CSS', completed: false },
  { id: 2, text: 'Learm JS', completed: true },
  { id: 3, text: 'Learm React', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);

    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducer;
