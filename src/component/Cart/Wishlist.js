import React from "react";
import CartItems from "./CartItems";

export default function Wishlist() {
  return (
    <>
      <div className="cart">
        <div className="up-cart">
          <h1>SAVE FOR LATER</h1>
        </div>
        <CartItems/>
      </div>
    </>
  );
}
