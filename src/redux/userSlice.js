import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserOp, loginOp, logoutOp, signupOp } from "./operations";

const userInitialState = {
  name: null,
  email: null,
  token: null,
  error: null,
  isLoading: false,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  const newState = { ...state };
  newState.isLoading = false;
  newState.error = action.payload;
  return newState;
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [signupOp.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    [signupOp.rejected]: handleRejected,
    [signupOp.pending]: handlePending,

    [loginOp.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
    },
    [loginOp.rejected]: handleRejected,
    [loginOp.pending]: handlePending,

    [logoutOp.fulfilled](state, action) {
      return userInitialState;
    },
    [logoutOp.rejected]: handleRejected,
    [logoutOp.pending]: handlePending,

    [getCurrentUserOp.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    [getCurrentUserOp.rejected](state, action) {
      console.log("Happened");
      const newState = { ...userInitialState };
      newState.error = action.payload;
      return newState;
    },
    [getCurrentUserOp.pending]: handlePending,
  },
});

export const userReducer = userSlice.reducer;
