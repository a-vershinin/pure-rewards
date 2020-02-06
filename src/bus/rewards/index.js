// Core
import React, { useState } from "react";

// Components
import { Loader, RewardsList } from "../../components";

// Utils
import { useGetRewards } from "./hooks";
import { useSetFilter } from "../filter/hooks";
import { useGetSearch } from "../search/hooks";
import {
  getFilteredRewards,
  getSortedRewards,
  getSeachedRewards
} from "./selectors";
import { book, history } from "../../navigation";

export const Rewards = () => {
  const [sortType, setSortType] = useState("");
  const { isFetching, rewards } = useGetRewards();
  const { activeFilter } = useSetFilter();
  const { search } = useGetSearch();

  // selectors
  const filteredRewards = getFilteredRewards(rewards, activeFilter);
  const sortedRewards = getSortedRewards(filteredRewards, sortType);
  const seachedRewards = getSeachedRewards(sortedRewards, search);

  const handleType = value => setSortType(value);
  const handleSelect = id => history.push(`${book.reward}/${id}`);

  return (
    <>
      {isFetching && <Loader />}
      {!isFetching && (
        <RewardsList
          rewards={seachedRewards}
          onClickColType={handleType}
          onSelect={handleSelect}
        />
      )}
    </>
  );
};
