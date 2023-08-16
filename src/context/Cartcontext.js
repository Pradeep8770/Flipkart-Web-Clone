import { useContext, useReducer } from "react";
import cartreducer from "../reducer/CartReducer";
import { createContext } from "react";
import { useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cartItem: [],
  wishlistItem: [],
  totalamount: [],
  cartItemQuantity: [],
};

export const CartContextProvider = ({ children }) => {
  const [cartState, cartdispatch] = useReducer(cartreducer, initialState);
  useEffect(() => {
    cartdispatch({ type: "TOTAL_AMOUNTE" });
  }, [cartState.cartItem]);

  return (
    <CartContext.Provider value={{ cartState, cartdispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
