import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-reducer"

export const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
