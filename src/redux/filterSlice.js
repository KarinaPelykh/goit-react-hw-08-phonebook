import { createSlice } from '@reduxjs/toolkit';

export const filterContact = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    addFilter(state, action) {
      state.value = action.payload;
    },
  },
});
export const { addFilter } = filterContact.actions;
export const filterReducer = filterContact.reducer;
