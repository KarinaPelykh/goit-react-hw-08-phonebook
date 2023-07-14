import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactss, deleteContact, fetchContacts } from 'service/Api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchContacts('/contacts');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contacts, { rejectWithValue }) => {
    console.log(contacts);
    try {
      const data = await addContactss(contacts);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
