// Core
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { rewardsActions } from "../actions";
import { book, history } from "../../../navigation";

export const useFetchRewards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rewardsActions.fetchAsync());
  }, [dispatch]);

  const { isFetching, data } = useSelector(state => state.rewards);
  const { rewards = [] } = data;

  useEffect(() => {
    !isFetching && rewards.length && history.push(book.rewardsAll);
  }, [isFetching, rewards]);
};
