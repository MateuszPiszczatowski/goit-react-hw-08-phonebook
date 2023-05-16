import { createSlice } from "@reduxjs/toolkit";
import { addContactOp, getContactsOp, deleteContactOp } from "./operations";

const contactsInitialState = {
  isLoading: false,
  error: null,
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    [addContactOp.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContactOp.rejected](state, action) {
      state.isLoading = false;
      state.error = action.message;
    },
    [addContactOp.pending](state, action) {
      state.isLoading = true;
    },

    [getContactsOp.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [getContactsOp.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getContactsOp.pending](state, action) {
      state.isLoading = true;
    },

    [deleteContactOp.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
    },
    [deleteContactOp.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactOp.pending](state, action) {
      state.isLoading = true;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
