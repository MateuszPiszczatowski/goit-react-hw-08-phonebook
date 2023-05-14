import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = false;

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return action.payload === "" ? false : action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
