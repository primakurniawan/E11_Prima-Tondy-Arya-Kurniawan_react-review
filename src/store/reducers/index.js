import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

const reducer = combineReducers({
  message: messageReducer,
});

export default reducer;
