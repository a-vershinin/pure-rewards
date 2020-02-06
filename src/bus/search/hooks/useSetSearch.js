// Core
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { searchActions } from "../actions";

export const useSetSearch = () => {
  const [searchValue, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.setSearch(searchValue));
  }, [dispatch, searchValue]);

  return {
    setSearch
  };
};
