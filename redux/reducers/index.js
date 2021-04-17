import authenticationReducer from "./authenticationData";
import mapMarkerReducer from "./mapMarkerData";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  authenticationReducer,
  mapMarkerReducer,
});

export default allReducers;
