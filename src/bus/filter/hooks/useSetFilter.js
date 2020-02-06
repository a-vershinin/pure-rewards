// Core
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { filterActions } from "../actions";

export const useSetFilter = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  const status = params.status && params.status.toUpperCase();

  useEffect(() => {
    dispatch(filterActions.setFilter(status));
  }, [dispatch, status]);

  const { filter } = useSelector(state => state.filter);

  return {
    activeFilter: filter
  };
};
