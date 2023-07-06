import { contactReduser } from './contactSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReducer,
  },
});
