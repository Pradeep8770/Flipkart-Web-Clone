import React from "react";
import CartProduct from "./CartProduct";
export default function CartItems({
  cartProduct,
  wishlistToggle,
  cartdispatch,
  totalamount,
}) {
  console.log(totalamount);
  return (
    <>
      <div className="cart-item">
        {cartProduct &&
          cartProduct.length > 0 &&
          cartProduct.map((element) => {
            // console.log("jfdf", element);
            return (
              <CartProduct
                element={element}
                cartdispatch={cartdispatch}
                wishlistToggle={wishlistToggle}
              />
            );
          })}
      </div>
    </>
  );
}
