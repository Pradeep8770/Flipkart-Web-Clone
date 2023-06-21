import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
import reducer from "../reducer/Productreducer";
import data from "../API/Data";

const AppContext = createContext();

// const API = "https://carbon.now.sh/embed/u7XPuIV28QLEUTMouwPi";

const initialState = {
  isSingleLoading: false,
  isError: false,
  singleProduct: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const singleProduct = url;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      console.log("data success", singleProduct);
    } catch (Error) {
      dispatch({ type: "SET_SINGLE_ERROR"});
    }
  };

  useEffect(() => {
    getSingleProduct(data);
  }, []);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

//custom hooks
const useProctContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProctContext };
