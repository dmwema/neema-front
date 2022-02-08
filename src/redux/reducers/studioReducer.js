import { ActionType } from "../contants/action-types";

const initialState = {
  studio: {},
};

export const studioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_STUDIO:
      return { ...state, studio: payload };
    default:
      return state;
  }
};
