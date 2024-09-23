import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './redux/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});
