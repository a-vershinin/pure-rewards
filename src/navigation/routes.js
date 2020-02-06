// Core
import React from "react";
import { Switch, Route } from "react-router-dom";

// Routes
import { book } from "./book";

// Layouts && Pages
import * as Views from "../views";
import { Home, Rewards, RewardEdit } from "../pages";

export const Routes = () => (
  <>
    <Switch>
      <Route exact path={book.root}>
        <Views.Layout>
          <Home />
        </Views.Layout>
      </Route>

      <Route exact path={book.rewardsAll}>
        <Views.Layout>
          <Rewards />
        </Views.Layout>
      </Route>

      <Route exact path={book.rewardId}>
        <Views.Layout>
          <RewardEdit />
        </Views.Layout>
      </Route>

      <Route exact path={book.rewardsStatus}>
        <Views.Layout>
          <Rewards />
        </Views.Layout>
      </Route>
    </Switch>
  </>
);
