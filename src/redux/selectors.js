import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectorFilter = state => state.filter.value;

export const selectorIsloading = state => state.isLoading.isLoading;

export const selectorError = state => state.error.error;

export const selectFilter = createSelector(
  [selectContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// const filter = useSelector(selectorFilter);

// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
