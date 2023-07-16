import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/FilterReducer"
const FilterContext = createContext();

const initialState = {
  fastdelivery:"",
  productCompany:[],
  sortBy: [], 
};

 export const FilterContextProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  // const sorting = () => {
  //   dispatch({ type: "GET_SORT_VALUE"});
  // };

  return <FilterContext.Provider value={{state, setState}}>{children}</FilterContext.Provider>;
};

 export const useFilterContext = () => {
  return useContext(FilterContext);
};

