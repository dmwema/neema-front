import { ActionType } from "../contants/action-types";

export const setStudio = (studio) => {
  return {
    type: ActionType.SET_STUDIO,
    payload: studio,
  };
};
