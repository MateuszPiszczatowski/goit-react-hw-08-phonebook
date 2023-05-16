import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryFetch, operationTypes } from "../utils/ApiHandler";

const contactsApiEnding = "contacts";
const usersApiEnding = "users";

export const getContactsOp = createAsyncThunk("contacts/getContacts", async (token, thunkAPI) => {
  const result = await tryFetch(contactsApiEnding, operationTypes.get, {
    Authorization: token,
  });
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const addContactOp = createAsyncThunk(
  "contacts/addContact",
  async ({ token, contact }, thunkAPI) => {
    const result = await tryFetch(
      contactsApiEnding,
      operationTypes.post,
      {
        Authorization: token,
      },
      contact
    );
    if (result.success) {
      return result.data;
    } else {
      return thunkAPI.rejectWithValue(result.errorMessage);
    }
  }
);

export const patchContactOp = createAsyncThunk(
  "contacts/updateContact",
  async ({ token, contact }, thunkAPI) => {
    const result = await tryFetch(
      `${contactsApiEnding}/${contact.id}`,
      operationTypes.put,
      {
        Authorization: token,
      },
      contact
    );
    if (result.success) {
      return result.data;
    } else {
      return thunkAPI.rejectWithValue(result.errorMessage);
    }
  }
);

export const deleteContactOp = createAsyncThunk(
  "contacts/removeContact",
  async ({ token, id }, thunkAPI) => {
    const result = await tryFetch(`${contactsApiEnding}/${id}`, operationTypes.delete, {
      Authorization: token,
    });
    if (result.success) {
      return result.data;
    } else {
      return thunkAPI.rejectWithValue(result.errorMessage);
    }
  }
);

export const signupOp = createAsyncThunk("user/signup", async (credentials, thunkAPI) => {
  const result = await tryFetch(`${usersApiEnding}/signup`, operationTypes.post, {}, credentials);
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const loginOp = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
  const result = await tryFetch(`${usersApiEnding}/login`, operationTypes.post, {}, credentials);
  if (result.success) {
    console.log("login result");
    console.log(result.data);
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const logoutOp = createAsyncThunk("user/logout", async (token, thunkAPI) => {
  const result = await tryFetch(`${usersApiEnding}/logout`, operationTypes.post, {
    Authorization: token,
  });
  if (result.success) {
    return result.data;
  } else {
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});

export const getCurrentUserOp = createAsyncThunk("user/getCurrentUser", async (token, thunkAPI) => {
  const result = await tryFetch(`${usersApiEnding}/current`, operationTypes.get, {
    Authorization: token,
  });
  console.log("happened");
  if (result.success) {
    return result.data;
  } else {
    if (result.errorMessage.slice(0, 3) === "401") {
      result.errorMessage = "Invalid token. Log in again.";
    }
    return thunkAPI.rejectWithValue(result.errorMessage);
  }
});
