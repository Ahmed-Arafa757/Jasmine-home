import { combineReducers } from "redux";
import count from "./counter";
import product from "./product";

export default combineReducers({
  count,
  product,
});
