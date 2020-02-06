// Types
import { types } from "./types";

export const searchActions = Object.freeze({
  // Sync
  setSearch: payload => {
    return {
      type: types.SET_SEARCH,
      payload
    };
  }
});
