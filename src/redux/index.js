import { combineReducers } from "redux";
import authReducer from "./slice/authSlice";
export default combineReducers({
    profile: authReducer,
  });