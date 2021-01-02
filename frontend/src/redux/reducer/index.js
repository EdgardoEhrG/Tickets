import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth";
import errorReducer from "./error";
import modalReducer from "./modal";
import ticketReducer from "./ticket";
import userReducer from "./user";

import { LOG_OUT } from "../types";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  modal: modalReducer,
  tickets: ticketReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
