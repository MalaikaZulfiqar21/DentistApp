import { combineReducers } from "redux";
import { usersSlice } from "./usersSlice";
import { userLocationSlice } from "./userLocationSlice";
export const rootReducer = combineReducers({
  user: usersSlice.reducer,
  locations: userLocationSlice.reducer,
});
