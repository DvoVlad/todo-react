import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';

const rootReducer = configureStore({
  reducer: {
    todos: todosReducer
  },
  devTools: true
});

export default rootReducer;