import { ActionType } from "../contants/action-types";

export const setEngineers = (engineers) => {
  return {
    type: ActionType.SET_ENGINEERS,
    payload: engineers,
  };
};

export const selectedEngineer = (engineer) => {
  return {
    type: ActionType.SELECTED_ENGINEER,
    payload: engineer,
  };
};
