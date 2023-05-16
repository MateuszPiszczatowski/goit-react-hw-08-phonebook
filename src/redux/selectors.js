export const getContacts = (state) => {
  if (state.filter) {
    return state.contacts.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  } else {
    return state.contacts.contacts;
  }
};

export const getUser = (state) => state.user;

export const getToken = (state) => state.user.token;
export const getFilter = (state) => state.filter;

export const getIsLoading = (state) => {
  return state.contacts.isLoading || state.user.isLoading;
};

export const getError = (state) => {
  let error = "";
  error += state.contacts.error ? state.contacts.error : "";
  error += state.user.error ? state.user.error : "";
  return error;
};
