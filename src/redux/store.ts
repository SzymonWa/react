import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksRedux';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    books: booksReducer,
  }
});

export default store;