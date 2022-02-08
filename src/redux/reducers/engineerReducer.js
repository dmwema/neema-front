import { ActionType } from "../contants/action-types";

const initialState = {
  engineers: [],
};

export const engineerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_ENGINEERS:
      return { ...state, engineers: payload };
    default:
      return state;
      break;
  }
};

export const selectedEngineerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_ENGINEER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
