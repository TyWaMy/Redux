import { combineReducers } from "redux";
import counter from "./counterReducer";
import inputReducer from "./inputReducer";

export default combineReducers({ counter, inputReducer });


