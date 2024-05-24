import { combineReducers } from "redux";
import { kondosReducer } from "./kondo/kondos.reducer";

export const rootReducer = combineReducers({
  kondos: kondosReducer,
});
