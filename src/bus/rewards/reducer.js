// Types
import { types } from "./types";

const initialState = {
  data: {
    users: [],
    rewards: []
  },
  isFetching: false,
  error: false
};

export const rewardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REWARDS_START_FETCHING:
      return { ...state, isFetching: true };
    case types.REWARDS_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.REWARDS_FILL:
      return { ...state, data: payload };
    case types.REWARD_UPDATE:
      const itemId = payload && payload.id;
      const rewards = state.data.rewards;
      const newRewards = rewards.map(r => {
        if (r.id !== itemId) {
          return r;
        }
        return { ...r, ...payload };
      });

      return {
        ...state,
        data: {
          ...state.data,
          rewards: newRewards
        }
      };

    case types.REWARDS_EMIT_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
