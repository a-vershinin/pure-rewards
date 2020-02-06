// Types
import { types } from "./types";

export const filterActions = Object.freeze({
  // Sync
  setFilter: payload => {
    return {
      type: types.SET_FILTER,
      payload
    };
  }
});
