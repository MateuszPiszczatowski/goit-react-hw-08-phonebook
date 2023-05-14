import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryFetch, operationTypes } from "../utils/ApiHandler";

const resourceName = "contacts";

export const getContactsOp = createAsyncThunk("tasks/getContacts", async (_, thunkAPI) => {
  const result = await tryFetch(resourceName);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const getContactOp = createAsyncThunk("tasks/getContact", async (id, thunkAPI) => {
  const result = await tryFetch(`${resourceName}/${id}`);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const addContactOp = createAsyncThunk("tasks/addContact", async (contact, thunkAPI) => {
  const result = await tryFetch(resourceName, operationTypes.post, contact);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const patchContactOp = createAsyncThunk("tasks/updateContact", async (contact, thunkAPI) => {
  const result = await tryFetch(`${resourceName}/${contact.id}`, operationTypes.put, contact);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const putContactOp = createAsyncThunk("tasks/swapContact", async (contact, thunkAPI) => {
  const result = await tryFetch(`${resourceName}/${contact.id}`, operationTypes.put, contact);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const deleteContactOp = createAsyncThunk("tasks/removeContact", async (id, thunkAPI) => {
  const result = await tryFetch(`${resourceName}/${id}`, operationTypes.delete);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});
