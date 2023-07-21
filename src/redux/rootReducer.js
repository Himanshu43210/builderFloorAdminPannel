import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./slice/apiSlice";
import authReducer from "./slice/authSlice";
import filterSlice from "./slice/filterSlice";

const rootReducer = combineReducers({
  user: authReducer,
  api: apiReducer,
  filter: filterSlice,
  // other reducers go here
});

export default rootReducer;
