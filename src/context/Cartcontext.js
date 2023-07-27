import { useContext, useReducer } from "react";
import cartreducer from "../reducer/CartReducer";
import { createContext } from "react";
const CartContext = createContext();

const initialState = {
  cartItem: [],
};

export const CartContextProvider = ({ children }) => {
  const [cartState, cartdispatch] = useReducer(cartreducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartdispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
