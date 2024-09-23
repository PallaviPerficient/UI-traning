import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: {
    New: [],
    "In Progress": [],
    Blocked: [],
    Resolved: [],
    Done: []
  },
  users: ["User1", "User2", "User3"],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { title, assignment, state: itemState } = action.payload;
      state.columns[itemState].push({ title, assignment, state: itemState });
    },
    updateItem: (state, action) => {
      const { column, index, updatedItem } = action.payload;
      state.columns[column][index] = updatedItem;
    },
    moveItem: (state, action) => {
      const { sourceColumn, sourceIndex, destinationColumn, destinationIndex } = action.payload;
      const [removed] = state.columns[sourceColumn].splice(sourceIndex, 1);
      state.columns[destinationColumn].splice(destinationIndex, 0, removed);
    },
  },
});

export const { addItem, updateItem, moveItem } = boardSlice.actions;
export default boardSlice.reducer;
