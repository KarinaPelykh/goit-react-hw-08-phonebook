export const selectContacts = state => state.contacts.contacts;

export const selectorFilter = state => state.filter.value;

export const selectorIsloading = state => state.isLoading.isLoading;

export const selectorError = state => state.error.error;
