import { createSlice } from '@reduxjs/toolkit';

export const filterContact = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    addFilter(state, { payload }) {
      state.value = payload;
    },
  },
});
export const { addFilter } = filterContact.actions;
export const filterReducer = filterContact.reducer;
