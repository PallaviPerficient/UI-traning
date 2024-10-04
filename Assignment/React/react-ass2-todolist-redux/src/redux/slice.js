import { createSlice } from "@reduxjs/toolkit";
import todoListData from "../todolistdata.json";

const todoListSlice = createSlice({
  name: "TodoList",
  initialState: todoListData,
  reducers: {

    addItem: (state, action) => {
      state.push(action.payload)
    },

    removeItem: (state, action) => {
      console.log("Remove Item", action.payload);
      const itemId = action.payload;
      const newTodoListData = state.filter((item) => item.id !== itemId);
      return newTodoListData;
    },

    markItemAsDone: (state, action) => {
      console.log("Done Item", action.payload);
      const itemId = action.payload[0];
      const isDone = action.payload[1];
      const newTodoListData = state.map((item) => {
        if (item.id === itemId) {
          const updatedItem = {
            ...item,
            isDone: isDone,
          };
          return updatedItem;
        }
        return item;
      });
      return newTodoListData;
    },
  },
});

export const { addItem, removeItem, markItemAsDone } = todoListSlice.actions;

export default todoListSlice.reducer;
