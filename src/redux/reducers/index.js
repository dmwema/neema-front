import { combineReducers } from "redux";
import { engineerReducer } from "./engineerReducer";
import { studioReducer } from "./studioReducer";
import { selectedEngineerReducer } from "./engineerReducer";

const reducers = combineReducers({
  allEngineers: engineerReducer,
  studioInfo: studioReducer,
  engineerInfo: selectedEngineerReducer,
});

export default reducers;
