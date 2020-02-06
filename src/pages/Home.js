// Core
import React from "react";

// Domains
import { Loader } from "../components";

// Utils
import { useFetchRewards } from "../bus/rewards/hooks";

export const Home = props => {
  useFetchRewards();
  return (
    <>
      <Loader />
    </>
  );
};
