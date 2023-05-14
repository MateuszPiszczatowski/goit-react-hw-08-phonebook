export const getContacts = (state) => {
  if (state.filter) {
    return state.contactsSlice.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  } else {
    return state.contactsSlice.contacts;
  }
};
export const getFilter = (state) => state.filter;

export const getIsLoading = (state) => {
  return state.contactsSlice.isLoading;
};

export const getError = (state) => {
  return state.contactsSlice.error;
};
