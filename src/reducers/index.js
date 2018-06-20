import { combineReducers } from "redux";
import tempReducer from "./tempReducer";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  temp: tempReducer,
  auth: authReducer,
  posts: postsReducer
});
