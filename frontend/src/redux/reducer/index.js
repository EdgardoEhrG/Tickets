import { combineReducers } from "redux";

import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  error: "",
});

export default rootReducer;
