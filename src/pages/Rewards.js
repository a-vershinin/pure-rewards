// Core
import React from "react";

// Components
import { Rewards as RewardsList, SearchBar } from "../bus";
import { Filter } from "../components";

export const Rewards = props => {
  return (
    <>
      <Filter />
      <SearchBar />
      <RewardsList />
    </>
  );
};
