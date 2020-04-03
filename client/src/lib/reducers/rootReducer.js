import { combineReducers } from "redux";
import { comments } from "./comments";
import { replies } from "./replies";

export const rootReducer = combineReducers({
  comments,
  replies,
});
