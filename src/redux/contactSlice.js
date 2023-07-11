import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      // .addCase(deleteContactThunk.fulfilled, (state, action) => {
      //   state.contacts = state.contacts.filter(
      //     contact => contact.id !== action.payload
      //   );
      // })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          task => task.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.isLoading = false;
      })

      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const contactReducer = contactSlice.reducer;
