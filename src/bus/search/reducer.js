// Types
import { types } from "./types";

const initialState = {
  search: ""
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
