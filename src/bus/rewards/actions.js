// Types
import { types } from "./types";

// Utils
import { api } from "../../api";
const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export const rewardsActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.REWARDS_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.REWARDS_STOP_FETCHING
    };
  },
  fill: payload => {
    return {
      type: types.REWARDS_FILL,
      payload
    };
  },
  update: payload => {
    return {
      type: types.REWARD_UPDATE,
      payload
    };
  },
  emitError: error => {
    return {
      type: types.REWARDS_EMIT_ERROR,
      error: true,
      payload: error
    };
  },

  // Async
  fetchAsync: () => async dispatch => {
    try {
      dispatch({
        type: types.REWARDS_FETCH_ASYNC
      });
      dispatch(rewardsActions.startFetching());

      const response = await api.rewards.fetch();
      await delay(1500); // Mock
      if (response.status !== 200) {
        const error = {
          message: response.message,
          status: response.status
        };
        throw new Error(error);
      }

      const results = await response.json();
      dispatch(rewardsActions.fill(results));
    } catch (error) {
      console.log("fetchAsync ERROR:", error);
      dispatch(rewardsActions.emitError(error));
    } finally {
      dispatch(rewardsActions.stopFetching());
    }
  }
});
