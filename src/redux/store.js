import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { userReducer } from "./userSlice";

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["token"],
};

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

const store = configureStore({
  reducer,
});

const persistor = persistStore(store);

export { store, persistor };
