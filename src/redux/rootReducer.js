import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./slice/apiSlice";
import filterSlice from "./slice/filterSlice";

const rootReducer = combineReducers({
  api: apiReducer,
  filter: filterSlice,
});

export default rootReducer;
