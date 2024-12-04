import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: []
}

const todosSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const item = action.payload;
        state.items.push(item);
      },
      prepare: (item) => {
        const uuid = uuidv4();
        return { payload: { ...item, uuid, done: false } }
      },
    },
    toggleTodo: (state, action) => {
      state.items = state.items.map((item) => item.uuid === action.payload ? {...item, done: !item.done} : item)
    },
    updateTodo: (state, action) => {
      state.items = state.items.map((item) => item.uuid === action.payload.uuid ? {...item, value: action.payload.value} : item)
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.uuid !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;