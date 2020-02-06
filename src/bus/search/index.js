// Core
import React from "react";

// Components
import { SearchBar as SearchBarComponent } from "../../components";

// Utils
import { useSetSearch } from "./hooks";

export const SearchBar = () => {
  const { setSearch } = useSetSearch();

  return (
    <>
      <SearchBarComponent onClickSearch={setSearch} />
    </>
  );
};
