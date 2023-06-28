import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
};

const FilterContextProvider = ({ Children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = () => {
    // dispatch({ type: "GET_SORT_VALUE" });
  };

  return <FilterContext.Provider>{Children}</FilterContext.Provider>;
};

const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, FilterContext, useFilterContext };
