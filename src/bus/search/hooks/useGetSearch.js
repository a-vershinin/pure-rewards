// Core
import { useSelector } from "react-redux";

export const useGetSearch = () => {
  const { search } = useSelector(state => state.search);

  return {
    search
  };
};
