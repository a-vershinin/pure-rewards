// Core
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Utils
import { rewardsActions } from "../../rewards/actions";
import { book, history } from "../../../navigation";

export const useUpdateReward = () => {
  const dispatch = useDispatch();
  const [rewardValue, setRewardValue] = useState(null);

  useEffect(() => {
    rewardValue && dispatch(rewardsActions.update(rewardValue));
    rewardValue && history.push(book.rewardsAll);
  }, [dispatch, rewardValue]);

  return {
    setRewardValue
  };
};
