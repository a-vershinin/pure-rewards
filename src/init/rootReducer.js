// Core
import { combineReducers } from "redux";

// Domains
import { rewardsReducer as rewards } from "../bus/rewards/reducer";
import { filterReducer as filter } from "../bus/filter/reducer";
import { searchReducer as search } from "../bus/search/reducer";

export const rootReducer = combineReducers({
  rewards,
  filter,
  search
});
