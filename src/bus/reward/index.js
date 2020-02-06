// Core
import React from "react";
import { useParams } from "react-router-dom";

// Components
import { Reward as RewardComponent } from "../../components";

// Utils
import { useGetRewards } from "../rewards/hooks";
import { useUpdateReward } from "./hooks";
import { getStatuses, getRewardItem } from "./selectors";
import { book, history } from "../../navigation";

export const Reward = () => {
  const { id } = useParams();
  const { rewards, users } = useGetRewards();
  const { setRewardValue } = useUpdateReward();

  const statues = getStatuses(rewards);
  const rewardItem = getRewardItem(rewards, id);

  const handleSave = values => setRewardValue(values);
  const handleCancel = () => history.push(book.rewardsAll);

  return (
    <>
      {
        <RewardComponent
          reward={rewardItem}
          users={users}
          statuses={statues}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      }
    </>
  );
};
