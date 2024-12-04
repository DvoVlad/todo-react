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
    }
  }
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;