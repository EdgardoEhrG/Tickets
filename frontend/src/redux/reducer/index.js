import { combineReducers } from "redux";

import authReducer from "./auth";
import errorReducer from "./error";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export default rootReducer;
