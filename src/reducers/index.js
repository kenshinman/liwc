import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import ministers from "./ministersReducer";

export default combineReducers({
  data: dataReducer,
  ministers
});
