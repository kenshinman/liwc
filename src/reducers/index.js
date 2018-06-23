import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import ministers from "./ministersReducer";
import db from "./dbReducer";

export default combineReducers({
  data: dataReducer,
  ministers,
  db
});
