// Types
import { types } from "./types";

const initialState = {
  filter: "ALL"
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
