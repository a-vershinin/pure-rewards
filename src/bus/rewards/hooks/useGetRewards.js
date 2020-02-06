// Core
import { useSelector } from "react-redux";

export const useGetRewards = () => {
  const { data, isFetching, error } = useSelector(state => state.rewards);
  const { rewards, users } = data;

  return {
    rewards,
    users,
    isFetching,
    error
  };
};
