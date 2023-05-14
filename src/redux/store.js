import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
