import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const initialState = {
  stock:null,
  fastdelivery: "",
  productCompany: "",
  sortBy: [],
  searchquery:""
};

export const FilterContextProvider = ({ children }) => {
  const [filterstate, filterdispatch] = useReducer(reducer, initialState);

  // const sorting = () => {
  //   dispatch({ type: "GET_SORT_VALUE"});
  // };

  return (
    <FilterContext.Provider value={{ filterstate, filterdispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
