// Core
import { getAllStatuses } from "../../utils/sortings";

export const getStatuses = (state = []) => {
  return getAllStatuses(state, "status");
};

export const getRewardItem = (state = [], id = "") => {
  return state.find(r => r.id.toString() === id.toString());
};
