// Core
import {
  getSortedByKey,
  getSortedByUserNames,
  getSortedByDate,
  getSortedByStatuses,
  getFilteredBySearch
} from "../../utils/sortings";

export const getFilteredRewards = (state = [], filter = "") => {
  switch (filter) {
    case "ALL":
      return state;

    case "NEW":
      return state.filter(reward => reward.status === "new");

    case "REDEEMED":
      return state.filter(reward => reward.status === "redeemed");

    case "COMPLETED":
      return state.filter(reward => reward.status === "completed");

    case "SCHEDULED":
      return state.filter(reward => reward.status === "scheduled");

    default:
      return state;
  }
};

export const getSortedRewards = (state = [], type = "") => {
  switch (type) {
    case "id":
      return getSortedByKey(state, type);
    case "experience":
      return getSortedByKey(state, type);
    case "user":
      return getSortedByUserNames(state, type, "name");
    case "date":
      return getSortedByDate(state, type);
    case "status":
      return getSortedByStatuses(state, type);

    default:
      return state;
  }
};

export const getSeachedRewards = (state = [], searchStr = "") => {
  return getFilteredBySearch(state, searchStr);
};
